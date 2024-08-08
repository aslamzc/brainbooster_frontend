import {
  IconBellPlus,
  IconBrandWechat,
  IconCash,
  IconCategory,
  IconCloudQuestion,
  IconHeart,
  IconLogout,
  IconSettings,
  IconStorm,
  IconTrash,
  IconUser,
  IconVersions,
} from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";

export const studentProfileSidebarData = [
  {
    id: uuidv4(),
    link: "/student-profile/dashboard",
    icon: <IconCategory size={20} />,
    title: "Dashboard",
  },
  {
    id: uuidv4(),
    link: "/student-profile/subscriptions",
    icon: <IconBellPlus size={20} />,
    title: "Subscriptions",
  },
  {
    id: uuidv4(),
    link: "/student-profile/my-courses",
    icon: <IconVersions size={20} />,
    title: "My Courses",
  },
  {
    id: uuidv4(),
    link: "/student-profile/course-resume",
    icon: <IconStorm size={20} />,
    title: "Course Resume",
  },
  {
    id: uuidv4(),
    link: "/student-profile/quiz",
    icon: <IconCloudQuestion size={20} />,
    title: "Quiz",
  },
  {
    id: uuidv4(),
    link: "/student-profile/message",
    icon: <IconBrandWechat size={20} />,
    title: "Chat",
  },
  {
    id: uuidv4(),
    link: "/student-profile/my-wishlist",
    icon: <IconHeart size={20} />,
    title: "Wishlist",
  },
  {
    id: uuidv4(),
    link: "/student-profile/edit-profile",
    icon: <IconUser size={20} />,
    title: "Edit Profile",
  },
  {
    id: uuidv4(),
    link: "/student-profile/payment-info",
    icon: <IconCash size={20} />,
    title: "Payment Info",
  },
  {
    id: uuidv4(),
    link: "/student-profile/setting",
    icon: <IconSettings size={20} />,
    title: "Settings",
  },
  {
    id: uuidv4(),
    link: "/student-profile/delete-profile",
    icon: <IconTrash size={20} />,
    title: "Delete Profile",
  },
  {
    id: uuidv4(),
    link: "/",
    icon: <IconLogout size={20} />,
    title: "Sign Out",
  },
];
