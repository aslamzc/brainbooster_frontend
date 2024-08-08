import NewsLetter from "@/components/pages/about-us/NewsLetter";
import ProductsContent from "@/components/pages/products/ProductsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const Products = () => {
  return (
    <div className="bg-neutral-20">
      <ProductsContent />
      <NewsLetter />
    </div>
  );
};

export default Products;
