import {
  IconMailOpened,
  IconMapPinCheck,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import ContactIconHomeFooterFive from "../icons/ContactIconHomeFooterFive";

const ContactUsFooterHomeFive = () => {
  return (
    <div>
      <h3
        className={`h3 } font-semibold text-neutral-500
        text-white`}
      >
        Contact
      </h3>
      <div
        className={`} mt-8 flex flex-col gap-6
        text-white`}
      >
        <div className="group flex items-center gap-x-5">
          <ContactIconHomeFooterFive key={uuidv4()} icon={<IconPhone />} />{" "}
          <div className=" flex flex-col gap-y-1">
            <Link href="tel:+3567897483">(303) 555-0105</Link>
            <Link href="tel:+3567897483">(219) 555-0144</Link>
          </div>
        </div>
        <div className="group flex items-center gap-x-5">
          <ContactIconHomeFooterFive key={uuidv4()} icon={<IconMailOpened />} />{" "}
          <p className="flex flex-col gap-y-1">
            <Link href="mailto:info@gmail.com">info@gmail.com</Link>
            <Link href="mailto:info@gmail.com">example@gmail.com</Link>
          </p>
        </div>
        <div className="group flex items-center gap-x-5">
          <ContactIconHomeFooterFive
            key={uuidv4()}
            icon={<IconMapPinCheck />}
          />{" "}
          <p className="flex flex-col gap-y-1">
            <span>3605 Parker Rd.</span>
            <span>3890 Poplar Dr.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsFooterHomeFive;
