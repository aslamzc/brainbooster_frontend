import TextM from "@/components/sharedComponents/TextM";

type Props = {
  icon: JSX.Element;
  title: string;
  text: string;
  className?: string;
};

const InstructorDashboardInfoCard = ({
  icon,
  title,
  text,
  className,
}: Props) => {
  return (
    <div
      className={`border-neutral-30 theme-transition-3 flex flex-col items-center gap-3 rounded-16px border bg-white p-6 text-center hover:scale-102 xxl:gap-6 xxl:p-6 ${className}`}
    >
      <div className="border-neutral-30 rounded-full bg-primaryColor p-2">
        {icon}
      </div>
      <div className="flex flex-col gap-3">
        <p className="h3 font-semibold">{title}</p>
        <TextM>{text}</TextM>
      </div>
    </div>
  );
};

export default InstructorDashboardInfoCard;
