import React from "react";

const TextLead = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <p className={`leadText font-medium ${className}`}>{children}</p>;
};

export default TextLead;
