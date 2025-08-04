// import mongoose from "mongoose";

// const blogSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: [true, "Title is required"],
//     },
//     desc: {
//       type: String,
//       required: [true, "Description is required"],
//     },
//     tag: {
//       type: String,
//     },
//     coverImg: {
//       public_id: {
//         type: String,
//       },
//       secure_url: {
//         type: String,
//       },
//     },
//     posts: {
//       type: [
//         {
//           post: {
//             type: String,
//           },
//           like: {
//             type: Number,
//             default: 0,
//           },
//           dislike: {
//             type: Number,
//             default: 0,
//           },
//           reply: {
//             type: String,
//           },
//         },
//         {
//           timestamps: true,
//         },
//       ],
//       default: [], // Ensure the default is an empty array -> Necessary
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Blog = mongoose.model("Blog", blogSchema);

// export default Blog;

//--------------------------------

import mongoose from "mongoose";

// Define sub-schema for posts with timestamps
const postSchema = new mongoose.Schema(
  { 
    user: {
      type: Object,
    },
    post: {
      type: String,
    },
    like: {
      type: Number,
      default: 0,
    },
    dislike: {
      type: Number,
      default: 0,
    },
    reply: {
      type: String,
    },
  },
  {
    timestamps: true,
    _id: false, // optional: prevents creating a unique _id for each post if you don't need it
  }
);

// Main blog schema
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    desc: {
      type: String,
      required: [true, "Description is required"],
    },
    tag: {
      type: String,
    },
    coverImg: {
      public_id: {
        type: String,
      },
      secure_url: {
        type: String,
      },
    },
    posts: {
      type: [postSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;





//------------------------------------

// replies: [
//   {
//     content: {
//       type: String,
//       required: true, // Make content required
//     },
//     author: {
//       type: String, // Or a reference to a User model
//       required: true, // Make author required
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },
//   },
// ],

//------------------------------------------------------------------------------------

// import mongoose from "mongoose";

// const replySchema = new mongoose.Schema({
//   content: {
//     type: String,
//     required: true, // Make content required
//   },
//   author: {
//     type: String, // You could reference a User model here if needed
//     required: true, // Make author required
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const postSchema = new mongoose.Schema({
//   post: {
//     type: String,
//     required: true, // Ensure post content is required
//   },
//   like: {
//     type: Number,
//     default: 0,
//   },
//   dislike: {
//     type: Number,
//     default: 0,
//   },
//   replies: [replySchema], // Use the replySchema for replies
// });

// const blogSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: [true, "Title is required"],
//     },
//     desc: {
//       type: String,
//       required: [true, "Description is required"],
//     },
//     tag: {
//       type: String,
//     },
//     coverImg: {
//       public_id: {
//         type: String,
//       },
//       secure_url: {
//         type: String,
//       },
//     },
//     posts: {
//       type: [postSchema], // Reference the postSchema here
//       default: [], // Ensure the default is an empty array
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Blog = mongoose.model("Blog", blogSchema);

// export default Blog;
