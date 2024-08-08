import React from "react";

const D3 = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <h3 className={`d3 font-semibold ${className}`}>{children}</h3>;
};

export default D3;
