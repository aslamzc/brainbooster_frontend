const Ul = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <ul className={` list-outside ps-6 ${className}`}>{children}</ul>;
};

export default Ul;
