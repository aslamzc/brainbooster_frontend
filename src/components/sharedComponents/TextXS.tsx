import React from "react";

const TextXS = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <p className={`text-xsText  ${className}`}>{children}</p>;
};

export default TextXS;
