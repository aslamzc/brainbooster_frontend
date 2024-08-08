import NewsLetter from "@/components/pages/about-us/NewsLetter";
import ContactUsForm from "@/components/pages/contact-us/ContactUsForm";
import Map from "@/components/pages/contact-us/Map";
import ElementLight from "@/components/sharedComponents/ElementLight";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

const ContactUs = () => {
  return (
    <div className="relative bg-neutral-20">
      <ContactUsForm />
      <Map />
      <div className="xxl:-mt-56">
        <NewsLetter />
      </div>
      <ElementLight />
    </div>
  );
};

export default ContactUs;
