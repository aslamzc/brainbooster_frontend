import React from "react";

const TextL = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <p className={`lText ${className}`}>{children}</p>;
};

export default TextL;
