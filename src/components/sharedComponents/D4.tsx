import React from "react";

const D4 = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <h3 className={`d4 font-semibold ${className}`}>{children}</h3>;
};

export default D4;
