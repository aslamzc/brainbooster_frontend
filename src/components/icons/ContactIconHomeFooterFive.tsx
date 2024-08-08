import React from "react";

const ContactIconHomeFooterFive = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div
      className={`theme-transition-3 rounded-full bg-bgColorTwo p-3 text-primaryColor group-hover:bg-primaryColor group-hover:text-neutral-700
      `}
    >
      {icon}
    </div>
  );
};

export default ContactIconHomeFooterFive;
