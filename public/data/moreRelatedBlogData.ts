import image1 from "@/../public/images/blog/more-related-blog-1.png";
import image2 from "@/../public/images/blog/more-related-blog-2.png";
import image3 from "@/../public/images/blog/more-related-blog-3.png";
import image4 from "@/../public/images/blog/more-related-blog-4.png";
import image5 from "@/../public/images/blog/more-related-blog-5.png";
import { v4 as uuidv4 } from "uuid";

export const moreRelatedBlogData = [
  {
    id: uuidv4(),
    link: "/",
    image: image1,
    title: "Demystifying Data Science",
    date: "23/10/23",
  },
  {
    id: uuidv4(),
    link: "/",
    image: image2,
    title: "Crafting Compelling Presentations",
    date: "23/10/23",
  },
  {
    id: uuidv4(),
    link: "/",
    image: image3,
    title: "The Psychology of Learning: How Cognitive ",
    date: "23/10/23",
  },
  {
    id: uuidv4(),
    link: "/",
    image: image4,
    title: "The Future of Remote Work: Trends ",
    date: "23/10/23",
  },
  {
    id: uuidv4(),
    link: "/",
    image: image5,
    title: "The Role of Emotional Intelligence ",
    date: "23/10/23",
  },
];
