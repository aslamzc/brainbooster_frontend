import { IconNotes, IconStars, IconVersions } from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";
export const allCourseTabName = [
  { id: uuidv4(), icon: <IconVersions />, buttonName: "All Course" },
  { id: uuidv4(), icon: <IconNotes />, buttonName: "Overview" },
  { id: uuidv4(), icon: <IconStars />, buttonName: "Review" },
];
