import image1 from "@/../public/images/community/newsfeed/latest-1.png";
import image2 from "@/../public/images/community/newsfeed/latest-2.png";
import image3 from "@/../public/images/community/newsfeed/latest-3.png";
import image4 from "@/../public/images/community/newsfeed/latest-4.png";
import { v4 as uuidv4 } from "uuid";

export const newsFeedSuggestionData = [
  {
    id: uuidv4(),
    image: image4,
    name: "Guy Hawkins",
    email: "info@gmail.com",
  },
  {
    id: uuidv4(),
    image: image2,
    name: "Cody Fisher",
    email: "info@gmail.com",
  },
  {
    id: uuidv4(),
    image: image1,
    name: "Albert Flores",
    email: "info@gmail.com",
  },
  {
    id: uuidv4(),
    image: image3,
    name: "Dianne Russell",
    email: "info@gmail.com",
  },
];
