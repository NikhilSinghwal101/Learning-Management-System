import { FiUpload } from "react-icons/fi";
import React, { useRef, useState } from "react";
import "../../App.css";
import { useDispatch } from "react-redux";
import { createBlog } from "../../redux/features/blogSlice";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["link", "image", "code-block"],
    ["clean"], // Remove formatting
  ],
};

const formats = [
  "header",
  "font",
  "list",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "align",
  "link",
  "image",
  "code-block",
];

function RichTextEditor({ value, onChange }) {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      placeholder="Blog Description..."
    />
  );
}

export default function CreateBlog() {
  const hiddenFileInput = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [_fileName, setFileName] = useState("");
  const [blogCoverImg, setBlogCoverImg] = useState("");
  const [coverFile, setCoverFile] = useState(null); // store the actual file

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tag, setTag] = useState("");

  // const [post, setPost] = useState("");
  // const [like, setLike] = useState(0);
  // const [dislike, setDislike] = useState(0);
  // const [reply, setReply] = useState("");

  const uploadFile = () => {
    hiddenFileInput.current?.click();
  };

  // const handleChange = (e) => {
  //   // setFileName(e.target?.files?.[0]?.name);
  //   const file = e.target?.files?.[0];
  //   if(file) {
  //       setFileName(file.name);
  //   }
  // }

  // const handleChange = (event) => {
  //   const file = event.target.files?.[0];

  //   if (file) {
  //     const reader = new FileReader();
  //     // console.log(reader);
  //     setFileName(file.name);

  //     reader.onload = (e) => {
  //       const content = e.target?.result;
  //       // console.log(content);
  //       setBlogCoverImg(content);
  //     };

  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setCoverFile(file); // Store file

      const reader = new FileReader();
      reader.onload = (e) => {
        setBlogCoverImg(e.target.result); // for preview only
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleBlogCreation = (e) => {
  //   e.preventDefault();
  //   dispatch(createBlog({
  //     title,
  //     desc,
  //     tag,
  //     blogCoverImg,
  //     post : "",
  //     like: 0,
  //     dislike: 0,
  //     reply: "",
  //   }));
  //   setTitle("");
  //   setDesc("");
  //   setTag("");
  //   setBlogCoverImg("");
  //   navigate('/blogs');
  // }

  const handleBlogCreation = (e) => {
    e.preventDefault();

    console.log("desc: ", desc);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("tag", tag);
    formData.append("coverImg", coverFile); // File object

    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

    // dispatch(createBlog(formData)).then(() => {
    //   navigate("/blogs");
    // });
    // setTitle("");
    // setDesc("");
    // setTag("");
    // setBlogCoverImg("");
    // setFileName("");
    // setCoverFile(null);

    dispatch(createBlog(formData)).then((res) => {
      if (!res.error) {
        navigate("/blogs");
        setTitle("");
        setDesc("");
        setTag("");
        setBlogCoverImg("");
        setFileName("");
        setCoverFile(null);
      }
    });
  };

  return (
    <>
      <form onSubmit={handleBlogCreation}>
        <div className="md:mx-52 p-8 mt-12 mx-8 md:mb-16 lg:mb-16 sm:mb-16 mb-12 border-[1px] border-slate-200 rounded-md">
          <div className="overflow-hidden md:mb-[20px] sm:mb-[16px] lg:mb-[20px] mb-[16px]">
            <label
              htmlFor="title"
              className="md:text-3xl lg:text-3xl sm:text-2xl text-xl text-gray-800 block md:mb-2 lg:mb-2 sm:mb-2 mb-[4px]"
            >
              Title
            </label>
            <input
              required
              name="title"
              id="title"
              type="text"
              value={title}
              placeholder="Enter the title..."
              className="border-[1px] border-gray-500 p-2 w-[100%] rounded-md text-md focus:outline-none lg:text-base md:text-base sm:text-base text-sm"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* <div className="overflow-hidden md:mb-[16px] sm:mb-[12px] lg:mb-[16px] mb-[10px]">
            <label
              htmlFor="description"
              className="md:text-3xl lg:text-3xl sm:text-2xl text-xl text-gray-800 block md:mb-2 lg:mb-2 sm:mb-2 mb-[4px]"
            >
              Description
            </label>
            <textarea
              required
              name="description"
              id="desc"
              value={desc}
              placeholder="Enter the description..."
              className="p-2 w-full text-md focus:outline-none lg:text-base md:text-base sm:text-base text-sm"
              rows={10}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div> */}
          <div className="overflow-hidden md:mb-[16px] sm:mb-[12px] lg:mb-[16px] mb-[10px]">
            <label
              htmlFor="description"
              className="md:text-3xl lg:text-3xl sm:text-2xl text-xl text-gray-800 block md:mb-2 lg:mb-2 sm:mb-2 mb-[4px]"
            >
              Description
            </label>
            {/* <RichTextEditor id="description" value={desc} onChange={setDesc} /> */}
            <RichTextEditor
              value={desc}
              onChange={(content) => {
                console.log("desc updated:", content);
                setDesc(content);
              }}
            />
          </div>
          <div className="overflow-hidden md:mb-[20px] sm:mb-[16px] lg:mb-[20px] mb-[4px]">
            <label
              htmlFor="tag"
              className="md:text-3xl lg:text-3xl sm:text-2xl text-xl text-gray-800 block md:mb-2 lg:mb-2 sm:mb-2 mb-[4px]"
            >
              Tag
            </label>
            <input
              required
              type="text"
              name="tag"
              id="tag"
              value={tag}
              placeholder="Enter the tag..."
              className="border-[1px] border-gray-500 p-2 w-[100%] rounded-md focus:outline-none lg:text-base md:text-base sm:text-base text-sm"
              onChange={(e) => setTag(e.target.value)}
            />
          </div>
          <div className="overflow-hidden md:mt-8 lg:mt-8 sm:mt-8 mt-[24px]">
            <input
              required
              type="file"
              className="hidden"
              name="file"
              id="fileId"
              ref={hiddenFileInput}
              onChange={handleChange}
            />
            <button
              className="border-[1px] border-gray-700 px-4 py-2 rounded-full cursor-pointer md:text-base lg:text-base ms:text-base text-sm flex justify-between items-center gap-2"
              type="button" // It is necessary to give type="button" to stop submit on clicking this button
              onClick={uploadFile}
            >
              Upload an image <FiUpload className="text-xl text-blue-800" />
            </button>
            {/* <label htmlFor="fileId" className="border-[1px] border-gray-700 px-4 py-2 rounded-md cursor-pointer">Upload an image</label> */}
            {blogCoverImg && (
              <div className="border-[1px] border-dotted border-black p-1 mt-2">
                <img
                  src={blogCoverImg}
                  alt=""
                  className="h-[200px] md:w-[200px] lg:w-[200px] sm:w-[200px] w-full"
                />
                {/* <p className="text-blue-800">{fileName}</p> */}
              </div>
            )}
          </div>
          <button
            className="border-none px-4 py-2 bg-green-400 text-white rounded-md hover:bg-gradient-to-r from-indigo-400 to-purple-500 md:mt-8 lg:mt-8 sm:mt-8 mt-4"
            type="submit"
          >
            Create a Blog
          </button>
        </div>
      </form>
    </>
  );
}
