const InfoBannerTwo = ({
  icon,
  iconBg,
  textOne,
  textTwo,
  className,
}: {
  icon: React.ReactNode;
  iconBg: "Purple" | "Green";
  textOne: string;
  textTwo: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex w-fit items-center justify-between gap-4 rounded-16px bg-white px-6 py-3 shadow-two ${className}`}
    >
      <div
        className={`rounded-full p-4 text-white ${
          iconBg === "Purple" ? "bg-[#875BF7]" : "bg-[#40B25B]"
        }`}
      >
        {icon}
      </div>
      <div>
        <p className="text-sText text-neutral-500">{textOne}</p>
        <p className="xlText font-medium text-neutral-700">{textTwo}</p>
      </div>
    </div>
  );
};

export default InfoBannerTwo;
