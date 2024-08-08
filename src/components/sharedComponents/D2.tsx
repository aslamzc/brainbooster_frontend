import React from "react";

const D2 = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <h3 className={`d2 font-semibold ${className}`}>{children}</h3>;
};

export default D2;
