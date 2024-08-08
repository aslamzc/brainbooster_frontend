import TextS from "@/components/sharedComponents/TextS";
import TextXL from "@/components/sharedComponents/TextXL";
import {
  IconCertificate,
  IconClock,
  IconUsers,
  IconVideo,
} from "@tabler/icons-react";

const AllInfo = () => {
  return (
    <div className=" bg-secondaryColorTwo bg-opacity-5 py-6">
      <div className="container grid  grid-cols-1 justify-between gap-6 sm:grid-cols-2 xxl:grid-cols-4 ">
        <div className="flex items-center gap-6">
          <div className="rounded-full bg-secondaryColorTwo p-4 text-white">
            <IconVideo size={28} />
          </div>
          <div className="flex flex-col gap-2">
            <TextXL>30,000 online courses</TextXL>
            <TextS>Enjoy a variety of fresh topics</TextS>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="rounded-full bg-secondaryColorTwo p-4 text-white">
            <IconUsers size={28} />
          </div>
          <div className="flex flex-col gap-2">
            <TextXL>Expert instruction</TextXL>
            <TextS>Find the right instructor for you</TextS>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="rounded-full bg-secondaryColorTwo p-4 text-white">
            <IconClock size={28} />
          </div>
          <div className="flex flex-col gap-2">
            <TextXL>Life time access</TextXL>
            <TextS>Learn on your schedule</TextS>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="rounded-full bg-secondaryColorTwo p-4 text-white">
            <IconCertificate size={28} />
          </div>
          <div className="flex flex-col gap-2">
            <TextXL>Get Certificate</TextXL>
            <TextS>When Courses Complete</TextS>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInfo;
