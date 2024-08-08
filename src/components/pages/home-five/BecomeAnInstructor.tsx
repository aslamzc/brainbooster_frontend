import instructorImage from "@/../public/images/home-five/instructor.png";
import vector from "@/../public/images/home-five/vector-instructor.png";
import ReactCounterUp from "@/components/sharedComponents/Counter";
import D4 from "@/components/sharedComponents/D4";
import TextL from "@/components/sharedComponents/TextL";
import Fade from "@/motionEffect/Fade";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import FadeTopToDown from "@/motionEffect/FadeTopToDown";
import {
  IconArrowUp,
  IconPigMoney,
  IconUsers,
  IconUsersGroup,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import AllInfoItem from "./AllInfoItem";
import SubTitle from "./SubTitle";
const BecomeAnInstructor = () => {
  return (
    <div className="section-gap-top section-gap-bottom overflow-hidden bg-neutral-20">
      <div className="container grid-cols-12 items-center gap-6 lg:grid">
        <div className="col-start-1 col-end-8  xxl:col-end-7">
          <SubTitle text="Inspired Instructor" />
          <Fade>
            <D4 className="pt-4">Become an Instructor</D4>
          </Fade>
          <FadeLeft>
            <TextL className="pt-6">
              Top instructors from around the world teach millions of students
              on Edufast.
            </TextL>
          </FadeLeft>
          <div className="padding-t-60  flex justify-between gap-6 max-sm:flex-col sm:items-center">
            <FadeTopToDown className="gap-32px flex flex-col">
              <AllInfoItem
                icon={<IconPigMoney />}
                textOne="Earn money"
                textTwo="Earn from course sales."
              />{" "}
              <AllInfoItem
                icon={<IconUsers />}
                textOne="Inspire students"
                textTwo="Teach, empower, inspire growth."
              />{" "}
              <AllInfoItem
                icon={<IconUsersGroup />}
                textOne="Join our community"
                textTwo="Leverage our instructor community."
              />{" "}
            </FadeTopToDown>
            <div className="padding-t-80 padding-b-80 relative flex min-h-[324px] w-fit shrink-0 flex-col justify-center gap-4 rounded-[100px] bg-primaryColor px-2 text-center sm:max-w-[200px]">
              <div className="d4 p font-semibold">
                <ReactCounterUp end={5} />
                <span>k+</span>
              </div>
              <div className="px-10">
                <TextL>Worldwide Satisfied Students</TextL>
              </div>
              <div className="absolute right-0 top-0">
                <div className="relative">
                  <Image
                    src={vector}
                    width={83}
                    height={80}
                    alt="Instructor vector"
                  />
                  <Link
                    href="/"
                    className="theme-transition-3 absolute bottom-3 right-3 w-fit rotate-45 rounded-full bg-bgColorOne p-3 text-primaryColor hover:rotate-90"
                  >
                    <IconArrowUp size={32} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FadeRight className="col-start-8 col-end-13 max-lg:padding-t-80">
          <Image
            src={instructorImage}
            width={581}
            height={759}
            alt="Instructor image"
          />
        </FadeRight>
      </div>
    </div>
  );
};

export default BecomeAnInstructor;
