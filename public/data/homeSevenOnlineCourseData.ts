const { v4: uuidv4 } = require("uuid");
import icon2 from "@/../public/images/home-seven/business.png";
import icon3 from "@/../public/images/home-seven/chemistry.png";
import icon5 from "@/../public/images/home-seven/health.png";
import icon4 from "@/../public/images/home-seven/higher-math.png";
import icon8 from "@/../public/images/home-seven/html.png";
import icon6 from "@/../public/images/home-seven/islamic-studies.png";
import icon1 from "@/../public/images/home-seven/react.png";
import icon7 from "@/../public/images/home-seven/technology.png";
export const homeSevenOnlineCourseData = [
  {
    id: uuidv4(),
    icon: icon1,
    title: "Physics",
    courseNumber: "748 Courses",
    link: "/physics-courses",
  },
  {
    id: uuidv4(),
    icon: icon3,
    title: "Chemistry",
    courseNumber: "658 Courses",
    link: "/chemistry-courses",
  },
  {
    id: uuidv4(),
    icon: icon7,
    title: "Technology",
    courseNumber: "845 Courses",
    link: "/technology-courses",
  },
  {
    id: uuidv4(),
    icon: icon5,
    title: "Health",
    courseNumber: "324 Courses",
    link: "/health-courses",
  },
  {
    id: uuidv4(),
    icon: icon2,
    title: "Business",
    courseNumber: "105 Courses",
    link: "/business-courses",
  },
  {
    id: uuidv4(),
    icon: icon8,
    title: "Engineer",
    courseNumber: "203 Courses",
    link: "/engineering-courses",
  },
  {
    id: uuidv4(),
    icon: icon4,
    title: "Higher Math",
    courseNumber: "216 Courses",
    link: "/higher-math-courses",
  },
  {
    id: uuidv4(),
    icon: icon6,
    title: "Islamic Studies",
    courseNumber: "570 Courses",
    link: "/islamic-studies-courses",
  },
];
