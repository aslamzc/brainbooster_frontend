import {
  IconCategory,
  IconFileAnalytics,
  IconFileCheck,
  IconFileText,
} from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";
export const galleryButtonName = [
  { id: uuidv4(), icon: <IconCategory />, buttonName: "All" },
  { id: uuidv4(), icon: <IconFileText />, buttonName: "Trending" },
  { id: uuidv4(), icon: <IconFileCheck />, buttonName: "Popularity" },
  { id: uuidv4(), icon: <IconFileAnalytics />, buttonName: "Featured" },
];
