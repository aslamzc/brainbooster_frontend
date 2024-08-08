import getStartImage from "@/../public/images/faq/get-started-image.png";
import sun from "@/../public/images/faq/sun.png";
import DropdownFullWidth from "@/components/dropdown/DropdownFullWidth";
import ElementLight from "@/components/sharedComponents/ElementLight";
import { IconBook, IconMail, IconUserCircle } from "@tabler/icons-react";
import Image from "next/image";

const GetStart = () => {
  const options = [
    { label: "web development" },
    { label: "React" },
    { label: "Wordpress" },
  ];
  return (
    <div className="section-gap-top section-gap-bottom relative overflow-hidden max-sm:px-2">
      <div className="container grid items-center gap-10 max-xl:justify-center xl:grid-cols-12 xl:gap-6">
        <div className="max-xl:order-2 xl:col-start-1 xl:col-end-7">
          <h4 className="d4 font-semibold">
            Join the Edufast Community: Start Now
          </h4>
          <p className="lText pt-6">
            Ready to explore our courses firsthand? Sign up for a free trial
            lesson today and get a taste of the engaging.
          </p>
          <div className="padding-t-40">
            <form>
              <div className="flex flex-col  gap-6">
                <div className="flex items-center gap-6 rounded-32px bg-neutral-20 pe-6">
                  <div className="rounded-full bg-white p-1">
                    <div className="rounded-full bg-neutral-20 p-2">
                      <IconUserCircle />
                    </div>{" "}
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Name..."
                    className=" w-full bg-inherit"
                  />
                </div>
                <div className="flex items-center gap-6 rounded-32px bg-neutral-20 pe-6">
                  <div className="rounded-full bg-white p-1">
                    <div className="rounded-full bg-neutral-20 p-2">
                      <IconMail />
                    </div>{" "}
                  </div>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className=" w-full bg-inherit"
                  />
                </div>
                <div className="flex items-center gap-6 rounded-32px bg-neutral-20 pe-6">
                  <div className="rounded-full bg-white p-1">
                    <div className="rounded-full bg-neutral-20 p-2">
                      <IconBook />
                    </div>{" "}
                  </div>
                  <div className="w-full">
                    <DropdownFullWidth options={options} />
                  </div>
                </div>
              </div>
              <div className="padding-t-40">
                <button className="py group theme-transition-3 flex w-fit items-center justify-center gap-2 rounded-32px bg-primaryColor px-5 py-3 text-base font-semibold capitalize text-neutral-700 shadow-five hover:bg-bgColorTwo hover:text-white hover:shadow-five-theme lg:px-8 lg:py-4">
                  Join Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" amx-xl:order-1 xl:col-start-8 xl:col-end-13">
          <div className="relative mx-auto w-fit">
            <Image
              src={getStartImage}
              width={526}
              height={540}
              alt="Get start image"
              className="rounded-16px"
            />
            <div className="padding-t-40 padding-b-40 padding-s-32 padding-e-32 absolute bottom-0 right-0 flex flex-col items-center justify-center gap-4 rounded-16px bg-primaryColor xl:-bottom-16 xl:max-[1500px]:right-0 min-[1500px]:-right-16">
              <p className="d4 font-semibold">32.6k</p>
              <p className="text-mText text-neutral-800">Joining Community</p>
            </div>
          </div>
        </div>
      </div>
      <ElementLight />
      <Image
        src={sun}
        width={109}
        height={107}
        alt="Sun"
        className="absolute bottom-[160px] max-[1650px]:hidden min-[1650px]:left-20"
      />
    </div>
  );
};

export default GetStart;
