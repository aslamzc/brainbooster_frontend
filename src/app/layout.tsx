import "@/../../node_modules/react-toastify/dist/ReactToastify.min.css";
import "@/../react-modal-video/scss/modal-video.scss";
import { inter } from "@/utils/fonts";
import type { Metadata } from "next";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "../styles/globals.css";
// react range slider css
import CustomCursor from "@/components/sharedComponents/CustomCursor";
import ScrollBackToTop from "@/components/sharedComponents/ScrollBackToTop";
import ReduxProvider from "@/redux/ReduxProvider";
import "react-quill/dist/quill.snow.css";
import "react-range-slider-input/dist/style.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Edufast - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body
          className={`font-inter text-base ${inter.variable} bg-white text-neutral-700`}
        >
          {children}
          <ToastContainer />
          <ScrollBackToTop />
          <CustomCursor />
          
        </body>
      </ReduxProvider>
    </html>
  );
}
