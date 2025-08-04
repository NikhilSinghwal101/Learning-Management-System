import fs from "fs/promises";
import path from "path";
import cloudinary from "cloudinary";
import asyncHandler from "../middlewares/asyncHandler.middleware.js";
import Course from "../models/course.model.js";
import AppError from "../utils/appError.js";

// export const createCourse = asyncHandler(async (req, res) => {
//   const {
//     title,
//     description,
//     category,
//     price,
//     level,
//     thumbnail,
//     // numberOfLectures,
//     createdBy,
//   } = req.body;

//   // console.log("req.body => ", req.body);

//   // try {
//   if (!title || !description) {
//     // res.status(400).json({
//     //   message: "All fields are required",
//     // });
//     next(new AppError("All fields are mandatory"));
//   }

//   const courseExists = await Course.findOne({ title });

//   if (courseExists) {
//     // res.status(409).json({
//     //   message: "Course already exists",
//     // });
//     next(new AppError("Course already exists", 409));
//   }

//   const course = new Course({
//     // In new Blog() we have to write await blog.save() but in await Blog.create(), it automatically save, we don't have to write await blog.save()
//     title,
//     description,
//     category,
//     // lessons,
//     price,
//     level,
//     // lectures,
//     // thumbnail: {
//     //   public_id: title,
//     //   secure_url:
//     //     "https://res.cloudinary.com/du9jzqlpt/image/upload/v1674647316/avatar_drzgxv.jpg",
//     // },
//     // numberOfLectures,
//     createdBy,
//   });

//   // if (!course) {
//   //   // res.status(400).json({
//   //   //   message: "Course creation failed, please try again later",
//   //   // });
//   //   next(new AppError("Course creation failed, please try again later", 400));
//   // }

//   // console.log("req => ", req);

//   console.log("req.file => ", req.file);

//   if (req.file) {
//     try {
//       const result = await cloudinary.v2.uploader.upload(req.file.path, {
//         folder: "lms", // Save files in a folder named lms
//       });

//       // If success
//       if (result) {
//         // Set the public_id and secure_url in array
//         course.thumbnail.public_id = result.public_id;
//         course.thumbnail.secure_url = result.secure_url;
//       }

//       // After successful upload remove the file from local storage
//       await fs.rm(`uploads/${req.file.filename}`);
//     } catch (error) {
//       // Empty the uploads directory without deleting the uploads directory
//       for (const file of await fs.readdir("uploads/")) {
//         await fs.unlink(path.join("uploads/", file));
//       }

//       // Send the error message
//       return next(
//         new AppError(
//           JSON.stringify(error) || "File not uploaded, please try again",
//           400
//         )
//       );
//     }
//   }

//   await course.save();

//   res.status(201).json({
//     success: true,
//     message: "Course created successfully!",
//     course,
//   });
//   // }  catch (err) {
//   //   res.status(500).json({
//   //     error: err.message,
//   //   });
//   // }
// });

export const createCourse = asyncHandler(async (req, res) => {
  const { title, description, category, price, level, createdBy } = req.body;

  if (!title || !description) {
    next(new AppError("All fields are mandatory"));
  }

  const courseExists = await Course.findOne({ title });

  if (courseExists) {
    next(new AppError("Course already exists", 409));
  }

  const course = new Course({
    title,
    description,
    category,
    price,
    level,
    createdBy,
  });

  if (req.file) {
    try {
      const result = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "lms",
      });

      if (result) {
        course.thumbnail = {
          public_id: result.public_id,
          secure_url: result.secure_url,
        };
      }

      await fs.rm(`uploads/${req.file.filename}`);
    } catch (error) {
      for (const file of await fs.readdir("uploads/")) {
        await fs.unlink(path.join("uploads/", file));
      }

      return next(
        new AppError(
          JSON.stringify(error) || "File not uploaded, please try again",
          400
        )
      );
    }
  }

  // Save after processing everything
  try {
    const savedCourse = await course.save();

    res.status(201).json({
      success: true,
      message: "Course created successfully!",
      course: savedCourse,
    });
  } catch (error) {
    return next(
      new AppError("Course creation failed, please try again later", 400)
    );
  }
});

/**
 * @ALL_COURSES
 * @ROUTE @GET {{URL}}/api/v1/courses
 * @ACCESS Public
 */
export const getAllCourses = asyncHandler(async (_req, res, next) => {
  // Find all the courses without lectures
  const courses = await Course.find({}).select("-lectures");

  res.status(200).json({
    success: true,
    message: "All courses fetched successfully",
    courses,
  });
});

//----------------------

export const getCourseById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const course = await Course.findById(id);
    // .populate("enrolledStudents", "name email") 
    // .exec();

  if (!course) {
    return next(new AppError("Invalid course id or course not found.", 404));
  }

  res.status(200).json({
    success: true,
    message: "Course details fetched successfully",
    course,
  });
});



// enrolledCourses field does not exist in MongoDB so .....

// async function addEnrolledStudentsFieldToAllCourses() {
//   try {
//     // Update all documents that don't have the enrolledStudents field yet
//     const result = await Course.updateMany(
//       { enrolledStudents: { $exists: false } }, // only those missing the field
//       { $set: { enrolledStudents: [] } }
//     );

//     console.log('Courses updated:', result.modifiedCount);
//   } catch (error) {
//     console.error('Error updating courses:', error);
//   }
// }

// addEnrolledStudentsFieldToAllCourses();


//------------------------

/**
 * @CREATE_COURSE
 * @ROUTE @POST {{URL}}/api/v1/courses
 * @ACCESS Private (admin only)
 */
// export const createCourse = asyncHandler(async (req, res, next) => {
//   const { title, description, category, createdBy } = req.body;

//   if (!title || !description || !category || !createdBy) {
//     return next(new AppError("All fields are required", 400));
//   }

//   const course = await Course.create({
//     title,
//     description,
//     category,
//     createdBy,
//   });

//   if (!course) {
//     return next(
//       new AppError("Course could not be created, please try again", 400)
//     );
//   }

//   // Run only if user sends a file
//   if (req.file) {
//     try {
//       const result = await cloudinary.v2.uploader.upload(req.file.path, {
//         folder: "lms", // Save files in a folder named lms
//       });

//       // If success
//       if (result) {
//         // Set the public_id and secure_url in array
//         course.thumbnail.public_id = result.public_id;
//         course.thumbnail.secure_url = result.secure_url;
//       }

//       // After successful upload remove the file from local storage
//       fs.rm(`uploads/${req.file.filename}`);
//     } catch (error) {
//       // Empty the uploads directory without deleting the uploads directory
//       for (const file of await fs.readdir("uploads/")) {
//         await fs.unlink(path.join("uploads/", file));
//       }

//       // Send the error message
//       return next(
//         new AppError(
//           JSON.stringify(error) || "File not uploaded, please try again",
//           400
//         )
//       );
//     }
//   }

//   // Save the changes
//   await course.save();

//   res.status(201).json({
//     success: true,
//     message: "Course created successfully",
//     course,
//   });
// });

/**
 * @GET_LECTURES_BY_COURSE_ID
 * @ROUTE @POST {{URL}}/api/v1/courses/:id
 * @ACCESS Private(ADMIN, subscribed users only)
 */
export const getLecturesByCourseId = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const course = await Course.findById(id);

  if (!course) {
    return next(new AppError("Invalid course id or course not found.", 404));
  }

  // console.log("Course: ", course)

  res.status(200).json({
    success: true,
    message: "Course lectures fetched successfully",
    lectures: course.lectures,
  });
});

/**
 * @ADD_LECTURE
 * @ROUTE @POST {{URL}}/api/v1/courses/:id
 * @ACCESS Private (Admin Only)
 */
export const addLectureToCourseById = asyncHandler(async (req, res, next) => {
  // console.log("req.body: ", req.body);
  const { title, description } = req.body;
  const { id } = req.params;

  // console.log(id)

  let lectureData = {};

  if (!title || !description) {
    return next(new AppError("Title and Description are required", 400));
  }

  const course = await Course.findById(id);

  // console.log(course);

  if (!course) {
    return next(new AppError("Invalid course id or course not found.", 400));
  }

  // console.log(req.file);
  console.log("video size: ", req.file.size);

  // Run only if user sends a file
  if (req.file && req.file.size <= 100000000) {
    // < 100 mb
    try {
      const result = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "lms", // Save files in a folder named lms
        chunk_size: 50000000, // 50 mb chunk size
        resource_type: "video",
      });

      console.log("public_id: ", result?.public_id);
      console.log("secure_url: ", result?.secure_url);

      // If success
      if (result) {
        // Set the public_id and secure_url in array
        lectureData.public_id = result.public_id;
        lectureData.secure_url = result.secure_url;
      }

      // console.log(result);

      // After successfull upload remove the file from local storage
      await fs.rm(`uploads/${req.file.filename}`);
    } catch (error) {
      // Empty the uploads directory without deleting the uploads directory
      for (const file of await fs.readdir("uploads/")) {
        await fs.unlink(path.join("uploads/", file));
      }

      // console.log(error);

      // Send the error message
      return next(
        new AppError(
          JSON.stringify(error) || "File not uploaded, please try again",
          400
        )
      );
    }
  }

  // const filePath = path.resolve(req.file.path);
  // console.log("📤 Uploading file at:", filePath);

  course.lectures.push({
    title,
    description,
    lecture: lectureData,
  });

  course.numberOfLectures = course.lectures.length;

  // Save the course object
  await course.save();

  // console.log(course);

  res.status(200).json({
    success: true,
    message: "Course lecture added successfully",
    course,
  });
});

/**
 * @Remove_LECTURE
 * @ROUTE @DELETE {{URL}}/api/v1/courses/:courseId/lectures/:lectureId
 * @ACCESS Private (Admin only)
 */
// export const removeLectureFromCourse = asyncHandler(async (req, res, next) => {
//   // Grabbing the courseId and lectureId from req.query
//   const { courseId, lectureId } = req.query;

//   console.log(courseId, lectureId);

//   // Checking if both courseId and lectureId are present
//   if (!courseId) {
//     return next(new AppError("Course ID is required", 400));
//   }

//   if (!lectureId) {
//     return next(new AppError("Lecture ID is required", 400));
//   }

//   // Find the course uding the courseId
//   const course = await Course.findById(courseId);

//   // If no course send custom message
//   if (!course) {
//     return next(new AppError("Invalid ID or Course does not exist.", 404));
//   }

//   // Find the index of the lecture using the lectureId
//   const lectureIndex = course.lectures.findIndex(
//     (lecture) => lecture._id.toString() === lectureId.toString()
//   );

//   // If returned index is -1 then send error as mentioned below
//   if (lectureIndex === -1) {
//     return next(new AppError("Lecture does not exist.", 404));
//   }

//   // Delete the lecture from cloudinary
//   await cloudinary.v2.uploader.destroy(
//     course.lectures[lectureIndex].lecture.public_id,
//     {
//       resource_type: "video",
//     }
//   );

//   // Remove the lecture from the array
//   course.lectures.splice(lectureIndex, 1);

//   // update the number of lectures based on lectres array length
//   course.numberOfLectures = course.lectures.length;

//   // Save the course object
//   await course.save();

//   // Return response
//   res.status(200).json({
//     success: true,
//     message: "Course lecture removed successfully",
//   });
// });

export const removeLectureFromCourse = asyncHandler(async (req, res, next) => {
  // Grabbing the courseId and lectureId from req.query
  const { courseId, lectureId } = req.query;

  // Log courseId and lectureId to debug
  // console.log("Course ID:", courseId);
  // console.log("Lecture ID:", lectureId);

  // Checking if both courseId and lectureId are present
  if (!courseId) {
    return next(new AppError("Course ID is required", 400));
  }

  if (!lectureId) {
    return next(new AppError("Lecture ID is required", 400));
  }

  // Find the course using the courseId
  const course = await Course.findById(courseId);
  if (!course) {
    return next(new AppError("Invalid ID or Course does not exist.", 404));
  }

  // Find the index of the lecture using the lectureId
  const lectureIndex = course.lectures.findIndex(
    (lecture) => lecture._id.toString() === lectureId.toString()
  );

  // Log if lecture index was found
  // console.log("Lecture index:", lectureIndex);

  // If returned index is -1 then send error as mentioned below
  if (lectureIndex === -1) {
    return next(new AppError("Lecture does not exist.", 404));
  }

  // Delete the lecture from cloudinary
  try {
    const cloudinaryResponse = await cloudinary.v2.uploader.destroy(
      course.lectures[lectureIndex].lecture.public_id,
      { resource_type: "video" }
    );
    // console.log("Cloudinary response:", cloudinaryResponse);
  } catch (error) {
    console.log("Error deleting video from Cloudinary:", error);
    return next(new AppError("Error deleting video from Cloudinary", 500));
  }

  // Remove the lecture from the array
  course.lectures.splice(lectureIndex, 1);

  // Update the number of lectures based on lectures array length
  course.numberOfLectures = course.lectures.length;

  // Save the course object
  await course.save();

  // Return response
  res.status(200).json({
    success: true,
    message: "Course lecture removed successfully",
  });
});

// const removeLectureFromCourse = async (req, res) => {
//   const { courseId, lectureId } = req.params; // Get courseId and lectureId from the URL

//   try {
//     // Find the course by its ID
//     const course = await Course.findById(courseId);
//     if (!course) {
//       return res.status(404).json({ message: "Course not found" });
//     }

//     // Find the lecture by its ID
//     const lecture = await Lecture.findById(lectureId);
//     if (!lecture) {
//       return res.status(404).json({ message: "Lecture not found" });
//     }

//     // Remove the lecture from the course's lectures list
//     course.lectures = course.lectures.filter(
//       (lecture) => lecture.toString() !== lectureId
//     );

//     // Save the updated course
//     await course.save();

//     // Optionally, delete the lecture itself (if required)
//     await Lecture.findByIdAndDelete(lectureId);

//     return res.status(200).json({ message: "Lecture removed successfully" });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Failed to remove lecture" });
//   }
// };

// router.delete("/:courseId/lectures/:lectureId", removeLectureFromCourse);  => For this route this removeLectureFromCourse function is correct

/**
 * @UPDATE_COURSE_BY_ID
 * @ROUTE @PUT {{URL}}/api/v1/courses/:id
 * @ACCESS Private (Admin only)
 */
export const updateCourseById = asyncHandler(async (req, res, next) => {
  // Extracting the course id from the request params
  const { id } = req.params;

  // Finding the course using the course id
  const course = await Course.findByIdAndUpdate(
    id,
    {
      $set: req.body, // This will only update the fields which are present
    },
    {
      new: true,
      runValidators: true, // This will run the validation checks on the new data
    }
  );

  // console.log("Updated course: ", course);

  // If no course found then send the response for the same
  if (!course) {
    return next(new AppError("Invalid course id or course not found.", 400));
  }

  // Sending the response after success
  res.status(200).json({
    success: true,
    message: "Course updated successfully",
    course,
  });
});

/**
 * @DELETE_COURSE_BY_ID
 * @ROUTE @DELETE {{URL}}/api/v1/courses/:id
 * @ACCESS Private (Admin only)
 */
export const deleteCourseById = asyncHandler(async (req, res, next) => {
  // Extracting id from the request parameters
  const { id } = req.params;

  // console.log(id);

  // Finding the course via the course ID
  const course = await Course.findByIdAndDelete(id);

  // console.log(course);

  // If course not find send the message as stated below
  if (!course) {
    return next(new AppError("Course with given id does not exist.", 404));
  }

  // Remove course
  // await course.remove();

  // Send the message as response
  res.status(200).json({
    success: true,
    message: "Course deleted successfully",
  });
});
