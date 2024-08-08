const InfoAboutFour = ({
  icon,
  iconBg,
  textOne,
  textTwo,
}: {
  icon: React.ReactNode;
  iconBg: "Purple" | "Yellow";
  textOne: string;
  textTwo: string;
}) => {
  return (
    <div className="flex w-fit items-center justify-between gap-4 rounded-16px bg-white px-6 py-3 shadow-two">
      <div
        className={`rounded-full p-4 text-white ${
          iconBg === "Purple" ? "bg-[#875BF7]" : "bg-secondaryColor"
        }`}
      >
        {icon}
      </div>
      <div>
        <p className="xlText font-bold text-neutral-700">{textOne}</p>
        <p className="text-sText text-neutral-500">{textTwo}</p>
      </div>
    </div>
  );
};

export default InfoAboutFour;
