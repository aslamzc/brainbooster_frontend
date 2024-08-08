import React from "react";

const H6 = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <h6 className={`h6 font-semibold ${className}`}>{children}</h6>;
};

export default H6;
