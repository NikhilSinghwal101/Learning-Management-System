import express from "express";
import cloudinary from "cloudinary";
import fs from "fs/promises";
import Blog from "../models/blog.model.js";
import User from "../models/user.model.js";

// export const createBlog = async (req, res) => {
//   const { title, desc, tag, coverImg: blogCoverImg, post, like, dislike, reply } = req.body;

//   console.log("req.body => ", req.body);

//   try {
//     if (!title || !desc) {
//       res.status(400).json({
//         message: "All fields are required",
//       });
//     }

//     const blogExists = await Blog.findOne({ title });

//     if (blogExists) {
//       res.status(409).json({
//         message: "Blog already exists",
//       });
//     }

//     // console.log(blogExists)

//     const blog = new Blog({
//       // In new Blog() we have to write await blog.save() but in await Blog.create(), it automatically save, we don't have to write await blog.save()
//       title,
//       desc,
//       tag,
//       coverImg: {
//         public_id: title,
//         secure_url:
//           "https://res.cloudinary.com/du9jzqlpt/image/upload/v1674647316/avatar_drzgxv.jpg",
//       },
//       posts: [],
//     });

//     // console.log("blog =>", blog);

//     if (!blog) {
//       res.status(400).json({
//         message: "Blog creation failed, please try again later",
//       });
//     }

//     console.log("req => ", req);

//     console.log("req.file => ", req.file);

//     if(req.file) {
//       try {
//       const result = await cloudinary.v2.uploader.upload(req.file.path, {
//         folder: 'lms',
//       })

//       console.log("result => ", result);


//       if(result) {
//         blog.coverImg.public_id = result.public_id;
//         blog.coverImg.secure_url = result.secure_url;

//         fs.rm(`uploads/${req.file.filename}`);
//       }
//     } catch(err) {
//       // console.log(err);
//         res.status(400).json({
//           message: "File not uploaded, please try again"
//         })
//       }
//     }

//     await blog.save();

//     res.status(201).json({
//       success: true,
//       message: "Blog created successfully!",
//       blog,
//     });
//   } catch (err) {
//     res.status(500).json({
//       error: err.message,
//     });
//   }
// };


export const createBlog = async (req, res) => {
  const { title, desc, tag } = req.body;

  console.log("req.body: ", req.body);
  console.log("req.file: ", req.file);

  try {
    if (!title || !desc || !tag) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const blogExists = await Blog.findOne({ title });

    if (blogExists) {
      return res.status(409).json({
        message: "Blog already exists",
      });
    }

    const blog = new Blog({
      title,
      desc,
      tag,
      posts: [],
    });

    // Handle image upload only if req.file is present
    if (req.file) {
      try {
        const result = await cloudinary.v2.uploader.upload(req.file.path, {
          folder: "lms",
        });

        blog.coverImg = {
          public_id: result?.public_id,
          secure_url: result?.secure_url,
        };

        // Delete local file after upload
        fs.rm(`uploads/${req.file.filename}`);
      } catch (err) {
        return res.status(400).json({
          message: "Image upload failed. Please try again.",
        });
      }
    }

    await blog.save();

    return res.status(201).json({
      success: true,
      message: "Blog created successfully!",
      blog,
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
};


export const getBlogsData = async (_req, res) => {
  try {
    const blogs = await Blog.find();
    // console.log("blogs: ", blogs)
    res.status(200).json({
      success: true,
      message: "All blogs fetched successfully!",
      blogs,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export const getSingleBlogData = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);

    const singleBlogData = await Blog.findById(id);
    // console.log("singleBlogData: ", singleBlogData);

    res.status(200).json({
      success: true,
      message: `${singleBlogData.title} fetched successfully!`,
      singleBlogData,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};


export const getPrevBlog = async (req, res) => {
  try {
    const currentBlog = await Blog.findById(req.params.id);
    if (!currentBlog) return res.status(404).json({ message: "Blog not found" });

    // Find the next blog based on createdAt
    const prevBlog = await Blog.findOne({
      createdAt: { $lt: currentBlog.createdAt },
    })
      .sort({ createdAt: -1 }) // Earliest blog before current
      .select("_id title tag coverImg");

    if (!prevBlog) return res.status(200).json(null); // No prev blog

    res.status(200).json(prevBlog);
  } catch (err) {
    res.status(500).json({ message: "Error fetching previous blog" });
  }
};



export const getNextBlog = async (req, res) => {
  try {
    const currentBlog = await Blog.findById(req.params.id);
    if (!currentBlog) return res.status(404).json({ message: "Blog not found" });

    // Find the next blog based on createdAt
    const nextBlog = await Blog.findOne({
      createdAt: { $gt: currentBlog.createdAt },
    })
      .sort({ createdAt: 1 }) // Earliest blog after current
      .select("_id title tag coverImg");

    if (!nextBlog) return res.status(200).json(null); // No next blog

    res.status(200).json(nextBlog);
  } catch (err) {
    res.status(500).json({ message: "Error fetching next blog" });
  }
};


export const postComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, post, like, dislike, reply } = req.body;

    const user = await User.findById(userId).select("fullName avatar role");

    if (!post) {
      return res.status(400).json({
        message: "Please, Fill the comment section!",
      });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found!",
      });
    }

    // Create a new post object
    const newPost = {
      user: user,
      post: post,
      like: like || 0, // Default to 0 if not provided
      dislike: dislike || 0, // Default to 0 if not provided
      reply: reply,
    };

    // Push the new post to the posts array
    blog.posts.push(newPost);

    // console.log("blog: ", blog);

    await blog.save();

    res.status(200).json({
      success: true,
      message: "Comment posted successfully!",
      singleBlogData: blog,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// export const getComment = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const blog = await Blog.findById(id);

//     // console.log("blog : ", blog);

//     res.status(200).json({
//       success: true,
//       message: "Comment fetched successfully!",
//       comments: blog.posts,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// Like a post
export const likeComment = async (req, res) => {
  try {
    // const post = await Blog.posts.like.findByIdAndUpdate(
    //   req.params.id,
    //   { $inc: { like: 1 } },
    //   { new: true }
    // );

     const { id } = req.params;

     console.log(id)

    //  const post = await Blog.posts.findById(id);

    //  console.log(post)
 
    //  if (!post) {
    //    return res.status(404).json({ message: 'Post not found.' });
    //  }
 
    //  post.like += 1; 
    //  await post.save(); 

    // console.log("post: ", post)

    // res.status(200).json({
    //   post,
    // });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Dislike a post
export const dislikeComment = async (req, res) => {
  try {
    // const post = await Blog.posts.findByIdAndUpdate(
    //   req.params.id,
    //   { $inc: { dislike: 1 } },
    //   { new: true }
    // );

      const { id } = req.params;  
      
      console.log(id)

    //   const post = await Blog.posts.findById(id);

    //    if (!post) {
    //      return res.status(404).json({ message: 'Post not found.' });
    //    }
   
    //    post.dislike += 1; 
    //    await post.save(); 

    // res.status(200).json({
    //   post,
    // });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
