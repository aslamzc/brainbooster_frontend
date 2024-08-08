"use client";
import { ChangeEvent, ReactNode, useRef, useState } from "react";

type Props = {
  icon: ReactNode;
};

const AddNewPostIcon = ({ icon }: Props) => {
  const [uploadData, setUploadData] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files?.[0] as Blob);

    reader.onload = (e) => {
      let content = e.target?.result as string;
      setUploadData(content);
    };
  };

  const handleIconClick = () => {
    // Trigger the hidden file input when the image is clicked
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        className="hidden"
        onChange={handleChange}
      />
      <button className="cursor-pointer" onClick={handleIconClick}>
        {icon}
      </button>
    </>
  );
};

export default AddNewPostIcon;
