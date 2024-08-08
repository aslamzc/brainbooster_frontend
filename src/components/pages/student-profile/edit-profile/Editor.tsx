"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

interface EditorProps {
  placeholder?: string;
}

interface EditorStaticProps {
  modules: Record<string, unknown>;
  formats: string[];
}

const Editor: React.FC<EditorProps> & EditorStaticProps = ({ placeholder }) => {
  const [editorHtml, setEditorHtml] = useState<string>("");

  const handleChange = (html: string) => {
    setEditorHtml(html);
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        onChange={handleChange}
        value={editorHtml}
        modules={Editor.modules}
        formats={Editor.formats}
        bounds={".app"}
        placeholder={placeholder}
        className="quill-editor"
      />
    </div>
  );
};

Editor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default Editor;
