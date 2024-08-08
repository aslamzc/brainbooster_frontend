import React from "react";

const TextXL = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <p className={`xlText font-medium ${className}`}>{children}</p>;
};

export default TextXL;
