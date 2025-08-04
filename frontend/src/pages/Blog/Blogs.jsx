// import BlogCard from "./BlogCard";
// import BlogData from "../../../public/blogdata.json";
// import { Link, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getBlogsData,
// } from "../../redux/features/blogSlice";
// import { toast } from "react-toastify";

// export default function Blog() {
//   const dispatch = useDispatch();
//   const { pathname } = useLocation();
//   const blogsData = useSelector((state) => state?.blogs?.blogs);
//   const [searchBlog, setSearchBlog] = useState("");

//   // console.log("blogsData:", blogsData)
//   // console.log("data: ", blogsData?.[0]?.coverImg?.secure_url)

//   const filterBlogBasedOnTagOrTitle = blogsData?.filter(
//     (blog) =>
//       blog.tag.toLowerCase().includes(searchBlog.toLowerCase()) ||
//       blog.title.toLowerCase().includes(searchBlog.toLowerCase())
//   );

//   // useEffect(() => {
//   //   dispatch(getBlogsData());
//   // }, [dispatch, pathname]);

//   useEffect(() => {
//   if (pathname !== "/blogs") return;

//   const fetchBlogs = async () => {
//     const toastId = toast.loading("Fetching blogs...");

//     try {
//       const res = await dispatch(getBlogsData()).unwrap();
//       toast.update(toastId, {
//         render: res.message || "Blogs fetched successfully!",
//         type: "success",
//         isLoading: false,
//         autoClose: 3000,
//       });
//     } catch (error) {
//       toast.update(toastId, {
//         render: error || "Failed to fetch blogs.",
//         type: "error",
//         isLoading: false,
//         autoClose: 3000,
//       });
//     }
//   };

//   fetchBlogs();
// }, [dispatch, pathname]);

//   return (
//     <>
//       <h1 className="lg:text-4xl md:text-4xl sm:text-2xl text-2xl text-center my-8 font-bold">
//         {BlogData[0].category}
//       </h1>
//       <div className="text-center mb-8">
//         <input
//           type="text"
//           placeholder="Search Tag or Title here..."
//           className="outline-green-400 outline-none rounded-sm px-2 py-1 lg:w-80 md:w-80 sm:w-48 w-48 lg:text-md md:text-md sm:text-sm text-sm"
//           onChange={(e) => setSearchBlog(e.target.value)}
//         />
//       </div>
//       <div className="gap-4 md:grid sm:grid lg:grid grid-cols-3 md:mx-52 p-2 md:mt-8 lg:mt-8 sm:mt-8 mt-4 mx-8 mb-4">
//         {filterBlogBasedOnTagOrTitle?.length > 0 ? (
//           filterBlogBasedOnTagOrTitle?.map((blog) => (
//             <Link to={`/blog-details/${blog._id}`} key={blog._id}>
//               <BlogCard
//                 id={blog?._id}
//                 coverImg={blog?.coverImg?.secure_url}
//                 tag={blog?.tag}
//                 category={blog?.category}
//                 title={blog?.title}
//                 desc={blog?.desc}
//               />
//             </Link>
//           ))
//         ) : (
//           <div className="text-center mt-4 mb-16 lg:mr-[-650px] md:mr-[-650px] sm:mr-[-450px]">
//             <div className="lg:text-2xl md:text-2xl sm:text-sm text-sm text-red-400">
//               No Blog found based on your Tag or Title...
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

//----------------------------------------------------------

// With react-loading-sleleton
import BlogCard from "./BlogCard";
import BlogData from "../../../public/blogdata.json";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsData } from "../../redux/features/blogSlice";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Blog() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const blogsData = useSelector((state) => state?.blogs?.blogs);
  const [searchBlog, setSearchBlog] = useState("");
  // const [isLoading, setIsLoading] = useState(true); // ✅ local loading state
  const { isLoading } = useSelector((state) => state?.blogs);

  const filterBlogBasedOnTagOrTitle = blogsData?.filter(
    (blog) =>
      blog.tag.toLowerCase().includes(searchBlog.toLowerCase()) ||
      blog.title.toLowerCase().includes(searchBlog.toLowerCase())
  );

  useEffect(() => {
    if (pathname !== "/blogs") return;

    const fetchBlogs = async () => {
      const toastId = toast.loading("Fetching blogs...");
      // setIsLoading(true);

      try {
        const res = await dispatch(getBlogsData()).unwrap();
        toast.update(toastId, {
          render: res.message || "Blogs fetched successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
          closeButton: true,
          onClick: () => toast.dismiss(toastId),
        });
      } catch (error) {
        toast.update(toastId, {
          render: error || "Failed to fetch blogs.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
          closeButton: true,
          onClick: () => toast.dismiss(toastId),
        });
      }
      //  finally {
      //   setIsLoading(false); // ✅ Stop loading in both cases
      // }
    };

    fetchBlogs();
  }, [dispatch, pathname]);

  return (
    <>
      <h1 className="lg:text-4xl md:text-4xl sm:text-2xl text-2xl text-center my-8 font-bold">
        {BlogData[0].category}
      </h1>
      <div className="text-center mb-8">
        <input
          type="text"
          placeholder="Search Tag or Title here..."
          className="outline-green-400 outline-none rounded-sm px-2 py-1 lg:w-80 md:w-80 sm:w-48 w-48 lg:text-md md:text-md sm:text-sm text-sm"
          onChange={(e) => setSearchBlog(e.target.value)}
        />
      </div>

      <div className="gap-4 md:grid sm:grid lg:grid grid-cols-3 md:mx-52 p-2 md:mt-8 lg:mt-8 sm:mt-8 mt-4 mx-8 mb-4">
        {isLoading ? (
          // ✅ Show 6 skeleton cards while loading
          Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border rounded-md p-2 mt-4">
                <Skeleton height={200} />
                <Skeleton width={`60%`} style={{ marginTop: "20px" }} />
                <Skeleton count={6} />
              </div>
            ))
        ) : filterBlogBasedOnTagOrTitle?.length > 0 ? (
          filterBlogBasedOnTagOrTitle.map((blog) => (
            <Link to={`/blog-details/${blog._id}`} key={blog._id}>
              <BlogCard
                id={blog?._id}
                coverImg={blog?.coverImg?.secure_url}
                tag={blog?.tag}
                category={blog?.category}
                title={blog?.title}
                desc={blog?.desc}
              />
            </Link>
          ))
        ) : (
          <div className="text-center mt-4 mb-16 lg:mr-[-650px] md:mr-[-650px] sm:mr-[-450px]">
            <div className="lg:text-2xl md:text-2xl sm:text-sm text-sm text-red-400">
              No Blog found based on your Tag or Title...
            </div>
          </div>
        )}
      </div>
    </>
  );
}
