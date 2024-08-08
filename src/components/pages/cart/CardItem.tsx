import BorderHorizontalSolidN40 from "@/components/customBorder/BorderHorizontalSolidN40";
import TextM from "@/components/sharedComponents/TextM";
import {
  cartUpdate,
  decreaseItem,
  increaseItem,
  removeItem,
} from "@/redux/features/cart-slich";
import { IconChevronDown, IconChevronUp, IconX } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import { useDispatch } from "react-redux";

type Props = {
  id: number;
  image: StaticImageData;
  productName: string;
  quantity: number;
  productRating: number;
  productPrice: number;
  subTotal: number;
};

const CardItem = ({
  id,
  image,
  productName,
  quantity,
  productRating,
  productPrice,
  subTotal,
}: Props) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="grid grid-cols-5 items-center justify-center">
        <div className="flex items-center gap-4">
          <div className="rounded-8px bg-white px-7 py-2">
            <Image src={image} width={49} height={49} alt="Product image" />
          </div>
          <TextM>{productName}</TextM>
        </div>
        <p className="px-3 py-6 text-center">${productPrice}</p>
        <div className="flex items-center justify-center px-3 py-6 text-center">
          <div className="padding-s-32 padding-e-32 flex items-center justify-center gap-1 rounded-8px bg-white py-4 ">
            <TextM>{quantity}</TextM>
            <div className="flex flex-col">
              <button
                className="-mb-2"
                onClick={() => {
                  dispatch(increaseItem(id));
                  dispatch(cartUpdate(id));
                }}
              >
                <IconChevronUp />
              </button>
              <button
                onClick={() => {
                  dispatch(decreaseItem(id));
                  dispatch(cartUpdate(id));
                }}
              >
                <IconChevronDown />
              </button>
            </div>
          </div>
        </div>
        <p className="px-3 py-6 text-center">${subTotal}.00</p>
        <button
          className="flex items-center justify-center"
          onClick={() => dispatch(removeItem(id))}
        >
          <IconX />
        </button>
      </div>
      <div className="py-6">
        <BorderHorizontalSolidN40 />
      </div>
    </>
  );
};

export default CardItem;
