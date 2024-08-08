import image1 from "@/../public/images/student-profile/my-courses-1.png";
import image2 from "@/../public/images/student-profile/my-courses-2.png";
import image3 from "@/../public/images/student-profile/my-courses-3.png";
import image4 from "@/../public/images/student-profile/my-courses-4.png";
import image5 from "@/../public/images/student-profile/my-courses-5.png";
import image6 from "@/../public/images/student-profile/my-courses-6.png";
import { v4 as uuidv4 } from "uuid";

export const mostSellingCoursesData = [
  {
    id: uuidv4(),
    image: image1,
    title: "Scrum Master",
    courseInstructor: "By Kristin Watson",
    selling: 100,
    amount: 499.99,
    period: "3 months",
    review: 4.8,
  },
  {
    id: uuidv4(),
    image: image2,
    title: "UI/UX Designer",
    courseInstructor: "By Ralph Edwards",
    selling: 80,
    amount: 299.99,
    period: "2 months",
    review: 4.5,
  },
  {
    id: uuidv4(),
    image: image3,
    title: "Python Skill",
    courseInstructor: "By Annette Black",
    selling: 120,
    amount: 599.99,
    period: "4 months",
    review: 4.9,
  },
  {
    id: uuidv4(),
    image: image4,
    title: "Node JS",
    courseInstructor: "By Darlene Robert",
    selling: 90,
    amount: 399.99,
    period: "3 months",
    review: 4.7,
  },
  {
    id: uuidv4(),
    image: image5,
    title: "Software Tester",
    courseInstructor: "By Courtney Henry",
    selling: 70,
    amount: 249.99,
    period: "2 months",
    review: 4.4,
  },
  {
    id: uuidv4(),
    image: image6,
    title: "Ethical Hacker",
    courseInstructor: "By Ronald Richards",
    selling: 110,
    amount: 549.99,
    period: "4 months",
    review: 4.6,
  },
];
