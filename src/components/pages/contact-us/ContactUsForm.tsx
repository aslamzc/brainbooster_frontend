"use client";
import emailjs from "@emailjs/browser";
import { IconMailOpened, IconMapPinPin, IconPhone } from "@tabler/icons-react";
import Link from "next/link";
import { useRef } from "react";
import { toast } from "react-toastify";
import { countries } from "../../../../public/data/allCountryName";
import BorderHorizontalN40 from "../../customBorder/BorderHorizontalN40";
import DropdownOne from "../../dropdown/DropdownOne";
import ButtonPrimarySmall from "../student-profile/edit-profile/ButtonPrimarySmall";

const ContactUsForm = () => {
  const notify = (message: string) =>
    toast(`${message} `, {
      autoClose: 3000,
      theme: "dark",
    });
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      // create a account in https://www.emailjs.com/
      // follow there documentation get "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID",  "YOUR_PUBLIC_KEY"
      // in "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID",  "YOUR_PUBLIC_KEY"  replace it with actual contents
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        // @ts-ignore
        form?.current,
        "YOUR_PUBLIC_KEY",
      )
      .then(
        (result) => {
          toast("Message Send Successfully!");
        },
        (error) => {
          toast("Message Not Send!");
        },
      );
  };

  return (
    <div className="container section-gap-top section-gap-bottom grid grid-cols-12 gap-6">
      <div className="col-start-1 col-end-13 xl:col-end-5">
        <div className="padding-all-32 gap-40px sticky top-32  flex flex-col rounded-16px bg-white">
          <h3 className="h3 font-semibold">Need more help?</h3>
          <BorderHorizontalN40 />
          <div className="flex flex-col gap-6">
            <div className="gap-32px flex items-center rounded-16px border-neutral-40 bg-neutral-20 p-6">
              <div className="rounded-full border border-neutral-40 bg-white p-6">
                <IconPhone size={36} />
              </div>
              <div>
                <h5 className="h5 font-semibold">Call Now</h5>
                <Link href="tel:+3567897483" className="block">
                  (303) 555-0105
                </Link>
                <Link href="tel:+3567897483" className="block">
                  (219) 555-0144
                </Link>
              </div>
            </div>{" "}
            <div className="gap-32px flex items-center rounded-16px border-neutral-40 bg-neutral-20 p-6">
              <div className="rounded-full border border-neutral-40 bg-white p-6">
                <IconMailOpened size={36} />
              </div>
              <div>
                <h5 className="h5 font-semibold">Email Address</h5>
                <Link href="mailto:info@gmail.com" className="block">
                  info@gmail.com
                </Link>
                <Link href="mailto:info@gmail.com" className="block">
                  example@gmail.com
                </Link>
              </div>
            </div>{" "}
            <div className="gap-32px flex items-center rounded-16px border-neutral-40 bg-neutral-20 p-6">
              <div className="rounded-full border border-neutral-40 bg-white p-6">
                <IconMapPinPin size={36} />
              </div>
              <div>
                <h5 className="h5 font-semibold">Location</h5>
                <p className="text-mText">Royal Ln. Mesa, New Jersey 45463</p>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="col-start-1 col-end-13 xl:col-start-5">
        <div className="padding-all-32 gap-40px flex flex-col rounded-16px bg-white">
          <h3 className="h3 font-semibold">Get in touch with us.</h3>
          <BorderHorizontalN40 />
          <div className="flex flex-col gap-6">
            <form
              ref={form}
              onSubmit={sendEmail}
              className={`flex flex-col gap-6 rounded-lg bg-white `}
            >
              <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                <div>
                  <label
                    className="lText mb-3 block font-medium"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full rounded-32px border border-neutral-40 bg-neutral-20 px-6 py-3 focus:outline-none"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter Name..."
                  />
                </div>
                <div>
                  <label
                    className="lText mb-3 block font-medium"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full rounded-32px border border-neutral-40 bg-neutral-20 px-6 py-3 focus:outline-none"
                    id="email"
                    type="email"
                    placeholder="Enter Email..."
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                <div>
                  <label
                    className="lText mb-3 block font-medium"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="w-full rounded-32px border border-neutral-40 bg-neutral-20 px-6 py-3 focus:outline-none"
                    id="phone"
                    type="number"
                    placeholder="Enter Your Number..."
                  />
                </div>
                <div>
                  <label
                    className="lText mb-3 block font-medium"
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <div className="w-full rounded-32px border border-neutral-40 bg-neutral-20  focus:outline-none">
                    <DropdownOne isLabel dropDownItems={countries} />
                  </div>
                </div>
              </div>
              <div>
                <label
                  className="lText mb-3 block font-medium"
                  htmlFor="question"
                >
                  Message
                </label>
                <textarea
                  className="w-full appearance-none rounded-32px border border-neutral-40 bg-neutral-20 px-6 py-3 leading-tight focus:outline-none"
                  id="question"
                  rows={8}
                  placeholder="Write your question..."
                  name="message"
                ></textarea>
              </div>
              <div className="mt-4">
                <ButtonPrimarySmall buttonText="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
