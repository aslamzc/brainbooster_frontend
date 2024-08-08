import React from "react";

const ContactIcon = ({
  icon,
  bg = "dark",
}: {
  icon: React.ReactNode;
  bg?: "white" | "dark";
}) => {
  return (
    <div
      className={`theme-transition-3 rounded-full border  p-3   ${
        bg === "white"
          ? "bg-bgColorOne text-primaryColor group-hover:bg-primaryColor group-hover:text-neutral-700"
          : "border-primaryColor bg-transparent text-primaryColor group-hover:bg-primaryColor group-hover:text-neutral-700"
      }`}
    >
      {icon}
    </div>
  );
};

export default ContactIcon;
