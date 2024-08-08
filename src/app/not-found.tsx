import NewsLetter from "@/components/pages/home-one/NewsLetter";
import NotFoundPage from "@/components/pages/not-found/NotFoundPage";

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
