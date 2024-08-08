import React from "react";

const H5 = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <h5 className={`h5 font-semibold ${className}`}>{children}</h5>;
};

export default H5;
