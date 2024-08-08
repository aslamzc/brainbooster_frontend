import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";
import SocialIcon from "./SocialIcon";

const SocialIconsSmall = () => {
  return (
    <div className="flex items-center gap-x-4">
      <SocialIcon
        key={uuidv4()}
        icon={<IconBrandFacebook size={16} />}
        link="/"
      />
      <SocialIcon
        key={uuidv4()}
        icon={<IconBrandTwitter size={16} />}
        link="/"
      />
      <SocialIcon
        key={uuidv4()}
        icon={<IconBrandInstagram size={16} />}
        link="/"
      />
      <SocialIcon
        key={uuidv4()}
        icon={<IconBrandPinterest size={16} />}
        link="/"
      />
    </div>
  );
};

export default SocialIconsSmall;
