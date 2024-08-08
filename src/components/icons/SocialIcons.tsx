import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";
import SocialIcon from "./SocialIcon";

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-x-4">
      <SocialIcon key={uuidv4()} icon={<IconBrandFacebook />} link="/" />
      <SocialIcon key={uuidv4()} icon={<IconBrandTwitter />} link="/" />
      <SocialIcon key={uuidv4()} icon={<IconBrandInstagram />} link="/" />
      <SocialIcon key={uuidv4()} icon={<IconBrandPinterest />} link="/" />
    </div>
  );
};

export default SocialIcons;
