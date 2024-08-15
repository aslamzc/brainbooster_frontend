import cardImage1 from "@/../public/images/homeOne/explore-courses-1.png";
import cardImage2 from "@/../public/images/homeOne/explore-courses-2.png";
import cardImage3 from "@/../public/images/homeOne/explore-courses-3.png";
import cardImage4 from "@/../public/images/homeOne/explore-courses-4.png";
import cardImage5 from "@/../public/images/homeOne/explore-courses-5.png";
import cardImage6 from "@/../public/images/homeOne/explore-courses-6.png";
import { v4 as uuidv4 } from "uuid";
export const aboutCoursesData = [
  {
    id: uuidv4(),
    cardImage: cardImage1,
    courseType: "Marketing",
    courseTitle: "Introduction to Digital Marketing",
    totalLessons: 20,
    courseDuration: "8h 30m",
    instructor: "Mamun Gheu",
    tags: [
      {
        label: "Grammer",
      },
    ],
    ratting: 2.3,
  },
  {
    id: uuidv4(),
    cardImage: cardImage2,
    courseType: "Design",
    courseTitle: "Web Development Fundamentals",
    totalLessons: 20,
    courseDuration: "8h 30m",
    instructor: "Mamun Gheu",
    tags: [
      {
        label: "Mathematics",
      }
    ],
    ratting: 2.3,
  },
  {
    id: uuidv4(),
    cardImage: cardImage3,
    courseType: "Front End",
    courseTitle: "Global Education Forum",
    totalLessons: 20,
    courseDuration: "8h 30m",
    instructor: "Mamun Gheu",
    tags: [
      {
        label: "Science",
      },
    ],
    ratting: 2.3,
  },
  {
    id: uuidv4(),
    cardImage: cardImage4,
    courseType: "Academic",
    courseTitle: "Healthy Cooking and Nutrition",
    totalLessons: 20,
    courseDuration: "8h 30m",
    instructor: "Mamun Gheu",
    tags: [
      {
        label: "Technology",
      }
    ],
    ratting: 2.3,
  }
];
