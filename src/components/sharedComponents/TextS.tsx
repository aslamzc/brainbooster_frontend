import React from "react";

const TextS = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={`text-sText text-neutral-500 ${className}`}>{children}</p>
  );
};

export default TextS;
