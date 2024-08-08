import Link from "next/link";

const HomeSixMenuItem = ({
  menuTitle,
  link,
}: {
  menuTitle: string;
  link: string;
}) => {
  return (
    <li className="theme-transition-3 text-mText hover:text-primaryColor">
      <Link href={`${link}`}>{menuTitle}</Link>
    </li>
  );
};

export default HomeSixMenuItem;
