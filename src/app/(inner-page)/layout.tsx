import "@/../../node_modules/react-toastify/dist/ReactToastify.min.css";
import "@/../react-modal-video/scss/modal-video.scss";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "../../styles/globals.css";
import "react-quill/dist/quill.snow.css";
import "react-range-slider-input/dist/style.css";
import NavbarFour from "@/components/navbar/NavbarFour";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BrainBooster",
  description: "",
};

export default function InnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarFour />
      {children}
    </>
  );
}
