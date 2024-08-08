import image1 from "@/../public/images/home-eight/university-instructor-1.png";
import image2 from "@/../public/images/home-eight/university-instructor-2.png";
import image3 from "@/../public/images/home-eight/university-instructor-3.png";
import image4 from "@/../public/images/home-eight/university-instructor-4.png";
import image5 from "@/../public/images/home-eight/university-instructor-5.png";
import image6 from "@/../public/images/home-eight/university-instructor-6.png";
import cardImage1 from "@/../public/images/home-eight/universty-courses-1.png";
import cardImage2 from "@/../public/images/home-eight/universty-courses-2.png";
import cardImage3 from "@/../public/images/home-eight/universty-courses-3.png";
import cardImage4 from "@/../public/images/home-eight/universty-courses-4.png";
import cardImage5 from "@/../public/images/home-eight/universty-courses-5.png";
import cardImage6 from "@/../public/images/home-eight/universty-courses-6.png";
import { v4 as uuidv4 } from "uuid";

export const homeEightUniversityCoursesData = [
  {
    id: uuidv4(),
    cardImage: cardImage1,
    courseTitle: "Introduction to Digital Marketing",
    totalLessons: 20,
    instructorImage: image1,
    instructor: "Dr. Kim Lux",
    totalStudent: 8.6,
    coursePrice: 299,
    ratting: 2.3,
  },
  {
    id: uuidv4(),
    cardImage: cardImage2,
    courseTitle: "Web Development Fundamentals",
    totalLessons: 20,
    instructorImage: image2,
    instructor: "Dr. Kim Lux",
    totalStudent: 8.6,
    coursePrice: 399,
    ratting: 2.3,
  },
  {
    id: uuidv4(),
    cardImage: cardImage3,
    courseTitle: "Introduction to Artificial Intelligence",
    totalLessons: 20,
    instructorImage: image3,
    instructor: "Dr. Kim Lux",
    totalStudent: 8.6,
    coursePrice: 199,
    ratting: 2.3,
  },
  {
    id: uuidv4(),
    cardImage: cardImage4,
    courseTitle: "Healthy Cooking and Nutrition",
    totalLessons: 20,
    instructorImage: image4,
    instructor: "Dr. Kim Lux",
    totalStudent: 8.6,
    coursePrice: 250,
    ratting: 2.3,
  },
  {
    id: uuidv4(),
    cardImage: cardImage5,
    courseTitle: "Music Production Techniques",
    totalLessons: 20,
    instructorImage: image5,
    instructor: "Dr. Kim Lux",
    totalStudent: 8.6,
    coursePrice: 200,
    ratting: 2.3,
  },
  {
    id: uuidv4(),
    cardImage: cardImage6,
    courseTitle: "Data Science for Beginners",
    totalLessons: 20,
    instructorImage: image6,
    instructor: "Dr. Kim Lux",
    totalStudent: 8.6,
    coursePrice: 299,
    ratting: 2.3,
  },
];
