import cardImage1 from "@/../public/images/blog/blog-classic-1.png";
import cardImage2 from "@/../public/images/blog/blog-classic-2.png";
import cardImage3 from "@/../public/images/blog/blog-classic-3.png";
import { v4 as uuidv4 } from "uuid";
export const blogClassicData = [
  {
    id: uuidv4(),
    image: cardImage1,
    title: "Mastering the Art of Time Management in Online",
    text: "Unlock the secrets to effective time management in the digital learning space. Learn practical tips to balance coursework, projects, and personal commitments.",
    by: "Admin",
    date: "12 Sep, 2023",
    view: 1.5,
    message: "24",
  },
  {
    id: uuidv4(),
    image: cardImage2,
    title: "The Impact of Technology on Education",
    text: "Explore the evolving landscape of education technology. From AI in learning to virtual classrooms, discover the latest trends shaping the future of education.",
    by: "Admin",
    date: "12 Sep, 2023",
    view: 1.5,
    message: "24",
  },
  {
    id: uuidv4(),
    image: cardImage3,
    title: "Behind the Scenes: A Day in the Life of a UI/UX",
    text: "Gain insights into the daily routines and challenges faced by UI/UX designers. Follow the journey of professionals shaping user experiences in the tech world.",
    by: "Admin",
    date: "12 Sep, 2023",
    view: 1.5,
    message: "24",
  },
];
