"use client";
import { IconEyeClosed } from "@tabler/icons-react";
import { useState } from "react";

type Props = {
  fieldName: string;
  id: string;
};

const SinglePasswordField = ({ fieldName, id }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <label className="lText mb-3 block font-medium" htmlFor={id}>
        Old Password
      </label>
      <div className="flex w-full items-center gap-2 rounded-16px border border-neutral-30 bg-neutral-10 px-8 py-4">
        <input
          id={id}
          type={`${showPassword ? "text" : "password"}`}
          placeholder="*******"
          className="w-full bg-inherit"
        />
        <span
          className={`cursor-pointer ${showPassword ? "rotate-180" : ""}`}
          onClick={() => setShowPassword(!showPassword)}
        >
          <IconEyeClosed size={16} />
        </span>
      </div>
    </div>
  );
};

export default SinglePasswordField;
