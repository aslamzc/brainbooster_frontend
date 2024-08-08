"use client";
import image1 from "@/../public/images/products/product-1.png";
import ButtonIconBgOne from "@/components/button/ButtonIconBgOne";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import TextL from "@/components/sharedComponents/TextL";
import TextM from "@/components/sharedComponents/TextM";
import {
  addToCart,
  decreaseDetailItem,
  increaseDetailItem,
} from "@/redux/features/cart-slich";
import { RootState } from "@/redux/store";
import {
  IconArrowUpRight,
  IconArrowsExchange,
  IconFileText,
  IconMinus,
  IconPlus,
  IconShare,
  IconShoppingCart,
  IconStarFilled,
  IconStarHalfFilled,
  IconTag,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import H3 from "../../sharedComponents/H3";
import TabReviews from "../courses-details-one/TabReviews";
import WriteAReview from "../courses-details-one/WriteAReview";
import ProductDetailText from "./ProductDetailText";
const ProductDetailsContent = ({ id }: { id: string }) => {
  const { detailsItem } = useSelector((state: RootState) => state.cart.value);
  const numberId = parseInt(id);
  const dispatch = useDispatch();
  const notify = (productTitle: string) =>
    toast(`${productTitle} is added to the cart!`, {
      autoClose: 3000,
      theme: "dark",
    });
  return (
    <div className="padding-b-80 padding-t-40">
      <div className="container grid-cols-12 gap-6 lg:grid">
        <div className="col-start-1 col-end-9 ">
          <div className="padding-all-32 gap-32px flex flex-col rounded-16px bg-white">
            <div className="gap-40px flex max-xl:flex-col xl:items-center">
              <div className="padding-t-32 padding-b-32 flex flex-col items-center justify-center rounded-16px bg-neutral-20 px-[78px] xl:basis-1/3 ">
                <Image
                  src={detailsItem?.image ?? image1}
                  width={135}
                  height={135}
                  alt="Product image"
                />
              </div>
              <div className="flex flex-col gap-4 xl:basis-2/3">
                <div className="flex items-end gap-1">
                  <H3>{detailsItem?.productName} </H3>
                  <TextL>(Gift Card)</TextL>
                </div>
                <div className="flex items-center gap-2 text-secondaryColor">
                  <IconStarFilled size={20} />
                  <IconStarFilled size={20} />
                  <IconStarFilled size={20} />
                  <IconStarFilled size={20} />
                  <IconStarHalfFilled size={20} />
                </div>
                <TextM>
                  Google Play Store, shortened to Play Store on the Home screen
                  and App screen, is Google&apos;s official pre-installed app
                  store on Android-certified devices.
                </TextM>
              </div>
            </div>
            <BorderHorizontalN40 />
            <ProductDetailText
              className="h4"
              title="Comfort is Key:"
              text="When choosing an office chair, prioritize comfort. Look for chairs with ergonomic designs, adjustable features, and ample padding to ensure a comfortable seating experience, especially for long hours of work. Invest in a chair made from durable materials. A high-quality chair not only provides comfort but is also built to withstand daily use, ensuring longevity and value for your investment."
            />
            <BorderHorizontalN40 />
            <ProductDetailText
              className="h5"
              title="Style and Aesthetics:"
              text="Consider the aesthetics of the chair to complement the overall design of your workspace. Whether you prefer a modern, sleek look or a more traditional style, there are office chairs available to suit various tastes."
            />
            <BorderHorizontalN40 />
            <ProductDetailText
              className="h6"
              title="Support for Good Posture:"
              text="Look for chairs that promote good posture. Proper lumbar support and a design that encourages a neutral spine position contribute to maintaining a healthy and comfortable seated posture. Chairs with swivel functionality and smooth mobility are practical for dynamic work environments. This allows users to easily reach different areas of their workspace without straining."
            />
          </div>
          <div className="mt-6">
            <div>
              <TabReviews bg="white" />
              <div className="mt-10">
                <WriteAReview bg="white" />
              </div>
            </div>
          </div>
        </div>
        <div className="padding-t-40 relative z-10 col-start-9 col-end-13 lg:-mt-40">
          <div className="padding-all-32 gap-40px sticky top-32 flex flex-col rounded-16px bg-white">
            <div>
              <TextL>Price</TextL>
              <div className="flex items-end gap-3 pt-3">
                <IconTag size={32} /> <TextM>From</TextM>{" "}
                <H3>${detailsItem ? detailsItem?.productPrice : 255}</H3>
              </div>
            </div>
            <div className=" flex flex-col gap-5 rounded-16px ">
              <div className="flex items-center justify-between gap-6">
                <p className="h3 font-semibold">
                  ${detailsItem ? detailsItem?.subTotal : 255}
                </p>{" "}
                <div className="gap-32px flex items-center justify-between rounded-32px border border-neutral-40 bg-white p-1">
                  <button
                    className="cursor-pointer rounded-full bg-bgColorOne p-3 text-primaryColor"
                    onClick={() => dispatch(decreaseDetailItem(numberId))}
                  >
                    <IconMinus size={20} />
                  </button>
                  <span className="h3 font-semibold">
                    {detailsItem ? detailsItem?.quantity : 1}
                  </span>{" "}
                  <button
                    className=" cursor-pointer rounded-full bg-primaryColor p-3 text-bgColorOne"
                    onClick={() => dispatch(increaseDetailItem(numberId))}
                  >
                    <IconPlus size={20} />
                  </button>
                </div>
              </div>
              <BorderHorizontalN40 />
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <IconFileText size={32} />{" "}
                  <p className="lText text-neutral-500">Total Quantity</p>
                </div>{" "}
                <p className="lText font-semibold">{detailsItem?.quantity}</p>
              </div>
              <BorderHorizontalN40 />
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <IconTag size={32} />{" "}
                  <p className="lText text-neutral-500">Total Price</p>
                </div>{" "}
                <p className="lText font-semibold">
                  $
                  {detailsItem
                    ? detailsItem?.productPrice! * detailsItem?.quantity!
                    : 255}
                </p>
              </div>
            </div>
            <div className="w-full px-6">
              <Link
                href="/cart"
                className="group theme-transition-3 flex w-full items-center justify-center gap-2 rounded-32px bg-primaryColor px-5 py-3 text-base font-semibold text-neutral-700 shadow-five hover:bg-bgColorOne hover:text-white hover:shadow-five-theme lg:px-8 lg:py-4 "
                onClick={(e) => {
                  notify(detailsItem?.productName!);
                  dispatch(
                    addToCart({
                      id: detailsItem?.id!,
                      image: detailsItem?.image!,
                      productName: detailsItem?.productName!,
                      productPrice: detailsItem?.productPrice!,
                      productRating: detailsItem?.productRating!,
                      quantity: detailsItem?.quantity!,
                      subTotal: detailsItem?.subTotal! * detailsItem?.quantity!,
                    }),
                  );
                }}
              >
                <span>Bye Now</span>{" "}
                <IconArrowUpRight className="theme-transition-3 group-hover:rotate-45" />
              </Link>

              <div className="mt-6 flex items-center justify-center gap-6">
                <ButtonIconBgOne link="/cart">
                  <IconShoppingCart size={20} />
                </ButtonIconBgOne>
                <ButtonIconBgOne link="/courses-comparison">
                  <IconArrowsExchange size={20} />
                </ButtonIconBgOne>
                <ButtonIconBgOne link="#">
                  <IconShare size={20} />
                </ButtonIconBgOne>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContent;
