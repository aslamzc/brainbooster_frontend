import Link from "next/link";

type Props = {
  page: string;
  subPage: string;
  pageLink: string;
};
const BreadCrumbs = ({ page, subPage, pageLink }: Props) => {
  return (
    <div className="flex items-center justify-center gap-1 text-mText font-semibold text-neutral-500 md:text-lText">
      <Link href="/">Home</Link> {" > "}
      <Link href={`${pageLink}`}>{page}</Link> {" > "}
      <span className="text-secondaryColorTwo">{subPage}</span>
    </div>
  );
};

export default BreadCrumbs;
