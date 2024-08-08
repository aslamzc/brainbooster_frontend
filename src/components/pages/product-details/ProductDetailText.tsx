import TextM from "@/components/sharedComponents/TextM";

const ProductDetailText = ({
  title,
  text,
  className,
}: {
  title: string;
  text: string;
  className: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className={`font-semibold ${className}`}>{title}</h3>
      <TextM>{text}</TextM>
    </div>
  );
};

export default ProductDetailText;
