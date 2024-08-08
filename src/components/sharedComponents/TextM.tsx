import React from "react";

const TextM = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <p className={`text-mText ${className}`}>{children}</p>;
};

export default TextM;
