import React from "react";

const H3 = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <h3 className={`h3 font-semibold ${className}`}>{children}</h3>;
};

export default H3;
