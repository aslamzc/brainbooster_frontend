import Link from "next/link";

const ButtonCourses = ({ label, link }: { label: string; link: string }) => {
  return (
    <Link
      href={`${link}`}
      className="theme-transition-3 rounded-32px border border-neutral-40 px-6 py-3 text-sText hover:scale-105 hover:bg-primaryColor"
    >
      {label}
    </Link>
  );
};

export default ButtonCourses;
