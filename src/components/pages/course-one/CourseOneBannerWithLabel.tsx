import SearchBarPrimary from "@/components/sharedComponents/SearchbarPrimary";

type Props = {
  title: string;
  handleSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: () => void
};

const CourseOneBannerWithLabel = ({
  title, handleSearch, search
}: Props) => {
  return (
    <section className="section-gap-top padding-b-60 border border-b border-neutral-40">
      <div className="container">
        <h2 className="h2 mx-auto max-w-[560px] text-center font-semibold">
          {title}
        </h2>
        <div className="mt-10">
          <SearchBarPrimary handleSearch={handleSearch} search={search} />
        </div>
      </div>
    </section>
  );
};

export default CourseOneBannerWithLabel;
