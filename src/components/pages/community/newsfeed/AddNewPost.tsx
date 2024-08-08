import {
  IconBrandGoogleDrive,
  IconCamera,
  IconMoodSmileBeam,
  IconPhoto,
} from "@tabler/icons-react";
import ButtonPrimarySmall from "../../student-profile/edit-profile/ButtonPrimarySmall";
import AddNewPostIcon from "./AddNewPostIcon";

const AddNewPost = () => {
  return (
    <div className="padding-all-32 flex w-full flex-col justify-between gap-6 rounded-16px bg-white">
      <p className="h5 font-semibold text-neutral-500">Add New Post</p>
      <textarea
        className="w-full appearance-none rounded-16px border border-neutral-40 bg-neutral-20 px-8 py-4 leading-tight focus:outline-none"
        id="question"
        rows={5}
        placeholder="Write a new post..."
      ></textarea>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <AddNewPostIcon icon={<IconMoodSmileBeam />} />
          <AddNewPostIcon icon={<IconCamera />} />
          <AddNewPostIcon icon={<IconPhoto />} />
          <AddNewPostIcon icon={<IconBrandGoogleDrive />} />
        </div>
        <ButtonPrimarySmall buttonText="Post" />
      </div>
    </div>
  );
};

export default AddNewPost;
