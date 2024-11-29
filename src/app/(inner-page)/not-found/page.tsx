import NotFoundPage from "@/components/pages/not-found/NotFoundPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found | BrainBooster",
  description: "",
};

const NotFound = () => {
  return (
    <>
      <NotFoundPage />
    </>
  );
};

export default NotFound;
