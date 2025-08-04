import { useDispatch, useSelector } from "react-redux";
// import BlogData from "../../../public/blogdata.json";
import "../../App.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  dislikeComment,
  fetchNextBlog,
  fetchPrevBlog,
  // getComment,
  getSingleBlogData,
  likeComment,
  postComment,
} from "../../redux/features/blogSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { FaReply, FaThumbsDown, FaThumbsUp } from "react-icons/fa6";

export default function BlogCardDetails() {
  // const params = useParams();
  // console.log("paramsId: ", params.id)
  // // const cardDetails = BlogData[params.id - 1];

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [post, setPost] = useState("");
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [reply, setReply] = useState("");

  const cardDetails = useSelector((state) => state?.blogs?.singleBlog);
  const userId = useSelector((state) => state?.auth?.data?.user?._id);
  const { prevBlog, nextBlog } = useSelector((state) => state?.blogs);

  useEffect(() => {
    dispatch(getSingleBlogData(id));
    // dispatch(getComment(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (id) {
      dispatch(fetchPrevBlog(id));
      dispatch(fetchNextBlog(id));
    }
  }, [dispatch, id]);

  const handlePrevBlog = () => {
    if (prevBlog?._id) {
      navigate(`/blog-details/${prevBlog._id}`);
    }
  };

  const handleNextBlog = () => {
    if (nextBlog?._id) {
      navigate(`/blog-details/${nextBlog._id}`);
    }
  };

  const handlePostComment = () => {
    if (post.trim() !== "") {
      dispatch(
        postComment({
          id,
          commentData: {
            userId,
            post,
            like,
            dislike,
            reply,
          },
        })
      );
      setPost("");
      setLike(0);
      setDislike(0);
      setReply("");
    } else {
      toast.error("Please, write the comment!");
    }
    // post !== "" && window.location.reload()
  };

  // const { comments } = useSelector((state) => state.blogs);
  // console.log("comments: ", comments);

  function timeAgo(dateString) {
    const now = new Date();
    const then = new Date(dateString);
    const seconds = Math.floor((now - then) / 1000);

    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "week", seconds: 604800 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
      { label: "second", seconds: 1 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count > 0) {
        return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
      }
    }

    return "Just now";
  }

  return (
    <>
      <div className="md:mx-52 p-2 md:mt-8 lg:mt-8 sm:mt-8 mt-4 mx-8 md:mb-12 lg:mb-12 sm:mb-12 mb-8">
        <div className="md:flex items-center">
          <img
            src={cardDetails?.coverImg?.secure_url}
            alt=""
            className="md:w-[60%] w-full md:h-72 h-36 rounded-md bg-gray-300 border-1 border-black"
          />
          <div className="md:h-72 h-60 flex items-center justify-between border-gray-200 border-[1px] md:mx-4 mx-0 md:mt-0 mt-2 rounded-md bg-white md:w-[40%] w-full py-2 px-1">
            <div className="border-green border-[1px] h-full w-1/2 cursor-pointer mx-1 rounded-md hover:scale-105">
              {prevBlog ? (
                <button onClick={handlePrevBlog}>
                  <div className="w-full h-full">
                    <img
                      src={prevBlog?.coverImg?.secure_url}
                      alt="prevBlog"
                      className="h-32 w-full rounded-md"
                    />
                    <span className="text-[11px] uppercase mt-2 mb-2 text-green-700 shadow-md tracking-[2px] bg-slate-100 rounded-full px-1">
                      {prevBlog?.tag}
                    </span>
                    <span className="capitalize text-sm font-semibold p-1 line-clamp-1 mt-4">
                      {prevBlog?.title}
                    </span>
                    <button className="border-[1px] border-gray-400 px-2 py-1 rounded-md mt-4">
                      Prev Blog
                    </button>
                  </div>
                </button>
              ) : (
                <p className="text-sm">No prev blog available</p>
              )}
            </div>
            <div className="border-green border-[1px] h-full w-1/2 cursor-pointer mx-1 rounded-md hover:scale-105">
              {nextBlog ? (
                <button onClick={handleNextBlog}>
                  <div className="w-full h-full">
                    <img
                      src={nextBlog?.coverImg?.secure_url}
                      alt="nextBlog"
                      className="h-32 w-full rounded-md"
                    />
                    <span className="text-[11px] uppercase mt-2 mb-2 text-green-700 shadow-md tracking-[2px] bg-slate-100 rounded-full px-1">
                      {nextBlog?.tag}
                    </span>
                    <span className="capitalize text-sm font-semibold p-1 line-clamp-1 mt-4">
                      {nextBlog?.title}
                    </span>
                    <button className="border-[1px] border-gray-400 px-2 py-1 rounded-md mt-4">
                      Next Blog
                    </button>
                  </div>
                </button>
              ) : (
                <p className="text-sm p-2">No next blog available</p>
              )}
            </div>
          </div>
        </div>
        <h1 className="md:text-4xl text-2xl mt-8 mb-2 font-semibold min-h-[100px]">
          {cardDetails?.title}
        </h1>
        <p className="md:text-md text-sm"
          dangerouslySetInnerHTML=
          {{
            __html: cardDetails?.desc,
          }}
        />

        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-wider text-red-500 mb-2">
            Leave a Comment
          </h2>
          <div className="">
            <textarea
              required
              name="comment"
              value={post}
              id="comment"
              placeholder="Comment..."
              rows={5}
              cols={110}
              className="lg:text-base md:text-base sm:text-base text-sm w-full p-[10px]"
              onChange={(e) => setPost(e.target.value)}
            ></textarea>
            <button
              className="px-4 py-2 text-gray-800 rounded-md mt-2 hover:text-gray-900 border-[2px] border-gray-800 font-semibold hover:scale-105"
              onClick={handlePostComment}
            >
              Post Comment
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-2xl mt-12 mb-4">Comments on this post</h2>
          <p className="border-b-[1px] border-gray-200">
            {cardDetails?.posts?.length} comments
          </p>
          <div className="mt-4 border-[1px] border-gray-200 rounded-md px-4 py-8 bg-gray-50">
            {cardDetails?.posts &&
              [...cardDetails.posts].reverse()?.map(
                (
                  comment,
                  _index // [...cardDetails.posts].reverse() => Array copy before reverse => to avoid mutating the original array
                ) => (
                  <div key={comment._id}>
                    <div className="flex items-center gap-2 mb-[24px]">
                      <img
                        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO3ihX_uOy-JxLG_WgdbL0ZGRn33A0xcBjuw&s"
                        src={comment?.user?.avatar?.secure_url}
                        alt="profile_img"
                        className="md:w-9 md:h-9 w-6 h-6 rounded-full cursor-pointer"
                      />
                      <span className="capitalize">
                        {comment?.user?.fullName}
                      </span>
                      <span className="mx-4 bg-white text-blue-700 py-[2px] px-1 rounded-xl lowercase border-[1px] border-blue-300">
                        {comment?.user?.role}
                      </span>
                      <span className="text-[11px] mx-1 bg-white border-gray-400 border-[1px] px-1 py-[2px] rounded-full">
                        {/* {comment?.createdAt
                          ?.split("T")[0]
                          .split("-")
                          .reverse()
                          .join("/")} */}
                        {timeAgo(comment?.createdAt)}
                      </span>
                    </div>
                    <span className="bg-white text-sm text-gray-900 p-2 border-[2px] border-slate-200 rounded-md flex flex-wrap">
                      {comment.post}
                    </span>

                    <div className="my-[20px] flex items-center flex-row gap-4 border-b-[1px] border-gray-200 pb-8">
                      <button
                        className=""
                        onClick={() => dispatch(likeComment(comment._id))}
                      >
                        <div className="flex items-center">
                          <BiSolidLike className="text-2xl hover:scale-110 text-slate-300 hover:text-slate-400" />
                          <p className="text-sm">({comment?.like})</p>
                        </div>
                      </button>
                      <button
                        className=""
                        onClick={() => dispatch(dislikeComment(comment._id))}
                      >
                        <div className="flex items-center">
                          <BiSolidDislike className="text-2xl hover:scale-110 text-slate-300 hover:text-slate-400" />
                          <p className="text-sm">({comment?.dislike})</p>
                        </div>
                      </button>
                      <button className="">
                        <div className="flex items-center">
                          <FaReply className="text-xl hover:scale-110 text-slate-300 hover:text-slate-400" />
                          <p className="text-sm">(0)</p>
                        </div>
                      </button>
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </>
  );
}
