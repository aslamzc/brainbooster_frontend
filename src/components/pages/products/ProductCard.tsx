"use client";
import ButtonUnderLine from "@/components/button/ButtonUnderLine";
import H5 from "@/components/sharedComponents/H5";
import TextL from "@/components/sharedComponents/TextL";
import TextLead from "@/components/sharedComponents/TextLead";
import TextM from "@/components/sharedComponents/TextM";
import { addToCart, sendDetails } from "@/redux/features/cart-slich";
import { IconShoppingCart, IconStarFilled } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

type Props = {
  id: number;
  image: StaticImageData;
  productName: string;
  productPrice: number;
  productRating: number;
};

const ProductCard = ({
  id,
  image,
  productName,
  productPrice,
  productRating,
}: Props) => {
  const notify = (productTitle: string) =>
    toast(`${productTitle} is added to the cart!`, {
      autoClose: 3000,
      theme: "dark",
    });
  const dispatch = useDispatch();
  return (
    <div className="theme-transition-3 flex flex-col gap-6 rounded-16px bg-white px-2 pb-6 pt-2 hover:scale-102">
      <div className="bg-neutral-20 relative flex items-center justify-center rounded-16px px-[78px] py-[32px] ">
        <button
          className="theme-transition-3 absolute right-4 top-4 rounded-full bg-bgColorTwo p-2 text-primaryColor hover:bg-secondaryColorTwo hover:text-white"
          onClick={(e) => {
            notify(productName);
            dispatch(
              addToCart({
                id,
                image,
                productName,
                productPrice,
                productRating,
                quantity: 1,
                subTotal: productPrice,
              }),
            );
          }}
        >
          <IconShoppingCart size={20} />
        </button>
        <Image src={image} width={135} height={135} alt="Product image" />
      </div>
      <div className="flex flex-col gap-4 px-5">
        <H5>{productName}</H5>
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <TextLead>${productPrice}</TextLead> <TextM>25% OFF</TextM>
          </div>
          <div className="flex items-center gap-1">
            <div className="text-secondaryColor">
              <IconStarFilled size={20} />
            </div>
            <TextL>{productRating}</TextL>
          </div>
        </div>
        <div
          onClick={(e) => {
            dispatch(
              sendDetails({
                id,
                image,
                productName,
                productPrice,
                productRating,
                quantity: 1,
                subTotal: productPrice,
              }),
            );
          }}
        >
          <ButtonUnderLine
            buttonText="Product Details"
            link={`/products/${id}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
