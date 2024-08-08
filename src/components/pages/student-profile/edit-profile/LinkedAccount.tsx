import facebook from "@/../public/images/student-profile/facebook.png";
import google from "@/../public/images/student-profile/google.png";
import linkedin from "@/../public/images/student-profile/linkedin.png";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H4 from "@/components/sharedComponents/H4";
import TextS from "@/components/sharedComponents/TextS";
import TextXL from "@/components/sharedComponents/TextXL";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import Image from "next/image";
import ButtonLinkAccountOutline from "./ButtonLinkAccountOutline";
import ButtonLinkAccountPrimary from "./ButtonLinkAccountPrimary";
import LinkAccountCard from "./LinkAccountCard";

const LinkedAccount = () => {
  return (
    <div className="padding-all-32 flex flex-col gap-6 rounded-16px border border-neutral-30 bg-white">
      <H4>Linked account</H4>
      <BorderHorizontalN40 />
      <div className="theme-transition-3 flex gap-6 rounded-16px border border-neutral-30 bg-neutral-10 p-6 hover:border-secondaryColorTwo hover:bg-secondaryColorTwo hover:bg-opacity-5 max-sm:flex-col">
        <div className="relative h-fit w-fit rounded-full border border-neutral-30 bg-white p-3">
          <IconCircleCheckFilled className="absolute -top-2.5 left-0 text-secondaryColorTwo" />
          <Image src={google} width={36} height={36} alt="Google brand logo" />
        </div>
        <div>
          <TextXL>Google</TextXL>
          <TextS className="pt-2">
            You are successfully connected to your Google account
          </TextS>
          <div className="flex items-center gap-4 pt-6 max-[400px]:flex-col">
            <ButtonLinkAccountPrimary buttonText="Invoke" />
            <ButtonLinkAccountOutline buttonText="Learn More" />
          </div>
        </div>
      </div>
      <LinkAccountCard
        image={linkedin}
        accountName="Linkedin"
        message="Connect with Linkedin account for a personalized experience"
      />
      <LinkAccountCard
        image={facebook}
        accountName="Facebook"
        message="Connect with Facebook account for a personalized experience"
      />
    </div>
  );
};

export default LinkedAccount;
