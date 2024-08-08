const { v4: uuidv4 } = require("uuid");
import icon1 from "@/../public/images/home-eight/icon1.png";
import icon2 from "@/../public/images/home-eight/icon2.png";
import icon3 from "@/../public/images/home-eight/icon3.png";
import icon4 from "@/../public/images/home-eight/icon4.png";
import icon5 from "@/../public/images/home-eight/icon5.png";
import icon6 from "@/../public/images/home-eight/icon6.png";

export const homeEightCourseCategoriesData = [
  {
    id: uuidv4(),
    icon: icon1,
    title: "Engineering & Technology",
    text: "Explore the forefront of innovation and technology. Dive into courses in categories...",
    link: "/signup",
  },
  {
    id: uuidv4(),
    icon: icon2,
    title: "Business & Management",
    text: "Master the art of strategic thinking and leadership. Enroll in courses covering...",
    link: "/signup",
  },
  {
    id: uuidv4(),
    icon: icon3,
    title: "Health Sciences & Medicine",
    text: "Embark on a journey into healthcare and wellness. Choose courses in categories...",
    link: "/signup",
  },
  {
    id: uuidv4(),
    icon: icon4,
    title: "Arts, Humanities Sciences",
    text: "Immerse yourself in the richness of human expression. Discover courses in Literature...",
    link: "/signup",
  },
  {
    id: uuidv4(),
    icon: icon5,
    title: "Data Science & Analytics",
    text: "Navigate the world of data-driven insights. Choose courses in Data Science...",
    link: "/signup",
  },
  {
    id: uuidv4(),
    icon: icon6,
    title: "Psychology Sciences",
    text: "Understand the intricacies of the human mind and behavior. Explore courses in Psychology...",
    link: "/signup",
  },
];
