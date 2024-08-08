import paymentLogo2 from "@/../public/images/student-profile/masterCard.png";
import image1 from "@/../public/images/student-profile/my-courses-1.png";
import image2 from "@/../public/images/student-profile/my-courses-2.png";
import image3 from "@/../public/images/student-profile/my-courses-3.png";
import image4 from "@/../public/images/student-profile/my-courses-4.png";
import image5 from "@/../public/images/student-profile/my-courses-5.png";
import image6 from "@/../public/images/student-profile/my-courses-6.png";
import paymentLogo1 from "@/../public/images/student-profile/payoneer.png";

import { v4 as uuidv4 } from "uuid";

export const paymentInfoTableData = [
  {
    id: uuidv4(),
    image: image1,
    title: "Scrum Master",
    startDate: "03/05/2023",
    cardNumber: "****4568",
    status: "Paid",
    total: 745,
    paymentLogo: paymentLogo1,
    courseInstructor: "By Kristin Watson",
  },
  {
    id: uuidv4(),
    image: image2,
    title: "UI/UX Designer",
    startDate: "03/05/2023",
    cardNumber: "****1234",
    status: "Pending",
    total: 500,
    paymentLogo: paymentLogo2,
    courseInstructor: "By Ralph Edwards",
  },
  {
    id: uuidv4(),
    image: image3,
    title: "Python Skill",
    startDate: "03/05/2023",
    cardNumber: "****5678",
    status: "Cancel",
    total: 600,
    paymentLogo: paymentLogo1,
    courseInstructor: "By Annette Black",
  },
  {
    id: uuidv4(),
    image: image4,
    title: "Node JS",
    startDate: "03/05/2023",
    cardNumber: "****9876",
    status: "Paid",
    total: 800,
    paymentLogo: paymentLogo2,
    courseInstructor: "By Darlene Robert",
  },
  {
    id: uuidv4(),
    image: image5,
    title: "Software Tester",
    startDate: "03/05/2023",
    cardNumber: "****5432",
    status: "Pending",
    total: 700,
    paymentLogo: paymentLogo1,
    courseInstructor: "By Courtney Henry",
  },
  {
    id: uuidv4(),
    image: image6,
    title: "Ethical Hacker",
    startDate: "03/05/2023",
    cardNumber: "****1122",
    status: "Cancel",
    total: 900,
    paymentLogo: paymentLogo2,
    courseInstructor: "By Ronald Richards",
  },
];
