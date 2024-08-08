import TextM from "@/components/sharedComponents/TextM";

const SubscriptionsInfo = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <TextM>{text}</TextM>
      <p className="xlText font-semibold lg:text-leadText">{title}</p>
    </div>
  );
};

export default SubscriptionsInfo;
