"use client";
import bannerImage from "@/../public/images/products/product-details-banner.png";
import NewsLetter from "@/components/pages/about-us/NewsLetter";
import ProductDetailsContent from "@/components/pages/product-details/ProductDetailsContent";
import Banner1600WithBreadCrumbs from "@/components/sharedComponents/Banner1600WithBreadCrumbs";
import { useParams } from "next/navigation";

const ProductsDetails = () => {
  const { id } = useParams();
  return (
    <div className="bg-neutral-20">
      <Banner1600WithBreadCrumbs
        bannerImage={bannerImage}
        page="Products"
        subPage="Details"
        pageLink="/products"
      />
      <ProductDetailsContent id={id.toString()} />
      <NewsLetter />
    </div>
  );
};

export default ProductsDetails;
