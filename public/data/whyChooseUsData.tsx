import image1 from "@/../public/images/homeOne/home-one-why-choose-1.png";
import image2 from "@/../public/images/homeOne/home-one-why-choose-2.png";
import image3 from "@/../public/images/homeOne/home-one-why-choose-3.png";
import { v4 as uuidv4 } from "uuid";
export const whyChooseUsData = [
  {
    id: uuidv4(),
    cardIcon: image1,
    cardTitle: "Learn the latest skills",
    cardText:
      "Quality education shouldn't break the bank. We offer competitive pricing and payment options",
  },
  {
    id: uuidv4(),
    cardIcon: image2,
    cardTitle: "Get ready for a career",
    cardText:
      "Engage in dynamic and interactive learning experiences. Our courses are designed",
  },
  {
    id: uuidv4(),
    cardIcon: image3,
    cardTitle: "Earn a Certificate",
    cardText:
      "Join a vibrant and supportive learning community. Connect with fellow learners",
  },
];
