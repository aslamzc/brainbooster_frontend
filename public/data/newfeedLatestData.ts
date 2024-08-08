import image1 from "@/../public/images/community/newsfeed/latest-1.png";
import image2 from "@/../public/images/community/newsfeed/latest-2.png";
import image3 from "@/../public/images/community/newsfeed/latest-3.png";
import image4 from "@/../public/images/community/newsfeed/latest-4.png";
import { v4 as uuidv4 } from "uuid";

export const newsFeedLatestData = [
  {
    id: uuidv4(),
    image: image1,
    name: "Esther Howard",
    joinedTime: "11 minutes ago",
  },
  {
    id: uuidv4(),
    image: image2,
    name: "Wade Warren",
    joinedTime: "11 minutes ago",
  },
  {
    id: uuidv4(),
    image: image3,
    name: "Jenny Wilson",
    joinedTime: "11 minutes ago",
  },
  {
    id: uuidv4(),
    image: image4,
    name: "Bessie Cooper",
    joinedTime: "11 minutes ago",
  },
];
