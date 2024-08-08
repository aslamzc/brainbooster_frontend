import {
  IconBrandWechat,
  IconCash,
  IconCategory,
  IconChartHistogram,
  IconCloudQuestion,
  IconLogout,
  IconSettings,
  IconShoppingCart,
  IconStar,
  IconTrash,
  IconUser,
  IconUsers,
  IconVersions,
} from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";

export const instructorProfileSidebarData = [
  {
    id: uuidv4(),
    link: "/instructor-profile/dashboard",
    icon: <IconCategory size={20} />,
    title: "Dashboard",
  },
  {
    id: uuidv4(),
    link: "/instructor-profile/my-courses",
    icon: <IconVersions size={20} />,
    title: "My Courses",
  },
  {
    id: uuidv4(),
    link: "/instructor-profile/quiz",
    icon: <IconCloudQuestion size={20} />,
    title: "Quiz",
  },
  {
    id: uuidv4(),
    link: "/instructor-profile/earnings",
    icon: <IconChartHistogram size={20} />,
    title: "Earnings",
  },

  {
    id: uuidv4(),
    link: "/instructor-profile/students",
    icon: <IconUsers size={20} />,
    title: "Students",
  },
  {
    id: uuidv4(),
    link: "/instructor-profile/chat",
    icon: <IconBrandWechat size={20} />,
    title: "Chart",
  },
  {
    id: uuidv4(),
    link: "/instructor-profile/orders",
    icon: <IconShoppingCart size={20} />,
    title: "Orders",
  },
  {
    id: uuidv4(),
    link: "/instructor-profile/reviews",
    icon: <IconStar size={20} />,
    title: "Reviews",
  },
  {
    id: uuidv4(),
    link: "/instructor-profile/edit-profile",
    icon: <IconUser size={20} />,
    title: "Edit Profile",
  },
  {
    id: uuidv4(),
    link: "/instructor-profile/payouts",
    icon: <IconCash size={20} />,
    title: "Payouts",
  },
  {
    id: uuidv4(),
    link: "/instructor-profile/setting",
    icon: <IconSettings size={20} />,
    title: "Setting",
  },
  {
    id: uuidv4(),
    link: "/instructor-profile/delete-profile",
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
