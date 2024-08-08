import {
  IconAB2,
  IconCalendarDue,
  IconChartHistogram,
  IconClock,
  IconFileCertificate,
  IconFilePercent,
  IconStars,
  IconUser,
  IconUserCircle,
  IconVersions,
  IconVideo,
  IconWorld,
} from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";
export const allInfoData = [
  {
    id: uuidv4(),
    icon: <IconVersions size={32} />,
    title: "Courses Title",
    text: "Web Development",
  },
  {
    id: uuidv4(),
    icon: <IconVideo size={32} />,
    title: "Lessons",
    text: "20 Videos",
  },
  {
    id: uuidv4(),
    icon: <IconWorld size={32} />,
    title: "Language",
    text: "English",
  },
  {
    id: uuidv4(),
    icon: <IconChartHistogram size={32} />,
    title: "Course Level",
    text: "Beginner",
  },
  {
    id: uuidv4(),
    icon: <IconStars size={32} />,
    title: "Reviews",
    text: "4.8 (2.3k)",
  },
  {
    id: uuidv4(),
    icon: <IconAB2 size={32} />,
    title: "Quizzes",
    text: "05",
  },
  {
    id: uuidv4(),
    icon: <IconClock size={32} />,
    title: "Duration",
    text: "9 Weeks",
  },
  {
    id: uuidv4(),
    icon: <IconUser size={32} />,
    title: "Students",
    text: "3.7k",
  },
  {
    id: uuidv4(),
    icon: <IconFileCertificate size={32} />,
    title: "Certifications",
    text: "Yes",
  },
  {
    id: uuidv4(),
    icon: <IconFilePercent size={32} />,
    title: "Pass Percentage",
    text: "80%",
  },
  {
    id: uuidv4(),
    icon: <IconCalendarDue size={32} />,
    title: "Deadline",
    text: "25 Dec, 2023",
  },
  {
    id: uuidv4(),
    icon: <IconUserCircle size={32} />,
    title: "Instructor",
    text: "Arafat Pranto",
  },
];
