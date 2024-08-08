import {
  IconBrandWechat,
  IconNews,
  IconPhoto,
  IconUsersGroup,
} from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";
export const newsFeedButton = [
  { id: uuidv4(), icon: <IconNews />, buttonName: "Newsfeed" },
  { id: uuidv4(), icon: <IconUsersGroup />, buttonName: "Members" },
  { id: uuidv4(), icon: <IconBrandWechat />, buttonName: "Message" },
  { id: uuidv4(), icon: <IconPhoto />, buttonName: "Gallery" },
];
