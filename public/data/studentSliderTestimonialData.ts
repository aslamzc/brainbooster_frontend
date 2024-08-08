import image1 from "@/../public/images/courses-comparison/student-slider-1.png";
import image2 from "@/../public/images/courses-comparison/student-slider-2.png";
import image3 from "@/../public/images/courses-comparison/student-slider-3.png";
import { v4 as uuidv4 } from "uuid";
export const studentSliderTestimonialData = [
  {
    id: uuidv4(),
    image: image1,
    quat: "\"The hands-on projects and real-world applications in the 'Web Development Fundamentals' course truly set it apart. I'm grateful for the skills it provided, helping me succeed in my role as a Scrum Master.\"",
    name: "Devon Lane",
    title: "Scrum Master",
  },
  {
    id: uuidv4(),
    image: image2,
    quat: "\"The 'Web Development Fundamentals' course transformed my understanding of coding. The interactive learning experience and supportive community were invaluable in shaping my career.\"",
    name: "Another Student Name",
    title: "Another Title",
  },
  {
    id: uuidv4(),
    image: image3,
    quat: "\"I'm thankful for the 'Web Development Fundamentals' course, which equipped me with the skills needed for my role as a Software Tester. The hands-on approach made all the difference.\"",
    name: "Courtney Henry",
    title: "Software Tester",
  },
];
