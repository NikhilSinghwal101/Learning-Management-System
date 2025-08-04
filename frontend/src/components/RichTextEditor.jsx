import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

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
  "header", "font", "list", "bold", "italic", "underline", 
  "strike", "color", "background", "align", "link", "image", "code-block"
];

const RichTextEditor = ({ input, setInput }) => {
  return (
    <ReactQuill
      theme="snow"
      value={input}
      onChange={setInput}
      modules={modules} // Use the modules variable
      formats={formats} // Use the formats variable
      placeholder="Course Description..." // Placeholder text
    />
  );
};

export default RichTextEditor;
