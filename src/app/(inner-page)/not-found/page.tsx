import NewsLetter from "@/components/pages/about-us/NewsLetter";
import NotFoundPage from "@/components/pages/not-found/NotFoundPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const NotFound = () => {
  return (
    <>
      <NotFoundPage />
      <div className="bg-bgColorOne">
        <NewsLetter />
      </div>
    </>
  );
};

export default NotFound;
