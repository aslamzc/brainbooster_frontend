import {
  IconCalendarDue,
  IconClock,
  IconMapPinPin,
  IconUsersGroup,
} from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";

export const eventInfoData = [
  {
    id: uuidv4(),
    icon: <IconCalendarDue size={32} />,
    title: "Courses Title",
    text: "Web Development",
  },
  {
    id: uuidv4(),
    icon: <IconClock size={32} />,
    title: "Start Date",
    text: "12/09/23",
  },
  {
    id: uuidv4(),
    icon: <IconCalendarDue size={32} />,
    title: "Start Time",
    text: "03:00 PM",
  },
  {
    id: uuidv4(),
    icon: <IconClock size={32} />,
    title: "End Time",
    text: "07:00 PM",
  },
  {
    id: uuidv4(),
    icon: <IconCalendarDue size={32} />,
    title: "End Date",
    text: "17/09/23",
  },
  {
    id: uuidv4(),
    icon: <IconUsersGroup size={32} />,
    title: "Ongoing",
    text: "3.5k",
  },
  {
    id: uuidv4(),
    icon: <IconMapPinPin size={32} />,
    title: "Location",
    text: "Coppell, Virginia",
  },
];
