import React from "react";

const H4 = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <h3 className={`h4 font-semibold ${className}`}>{children}</h3>;
};

export default H4;
