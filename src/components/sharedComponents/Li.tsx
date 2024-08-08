const Li = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <li className={` list-disc text-mText ${className}`}>{children}</li>;
};

export default Li;
