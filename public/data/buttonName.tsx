import {
  IconChartPie,
  IconStars,
  IconUserCircle,
  IconUserQuestion,
  IconVersions,
} from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";
export const buttonData = [
  { id: uuidv4(), icon: <IconChartPie />, buttonName: "Overview" },
  { id: uuidv4(), icon: <IconVersions />, buttonName: "Curriculum" },
  { id: uuidv4(), icon: <IconUserCircle />, buttonName: "Instructor" },
  { id: uuidv4(), icon: <IconUserQuestion />, buttonName: "FAQs" },
  { id: uuidv4(), icon: <IconStars />, buttonName: "Reviews" },
];
