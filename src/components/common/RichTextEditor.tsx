"use client";

import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div className="bg-white p-4 rounded">
      <ReactQuill
        value={value || ""}
        onChange={onChange}
        modules={modules}
        theme="snow"
        placeholder="Write something amazing..."
        className="bg-white text-black rounded"
      />
    </div>
  );
};

export default RichTextEditor;
