import image1 from "@/../public/images/instructor-profile/order-1.png";
import image10 from "@/../public/images/instructor-profile/order-10.png";
import image11 from "@/../public/images/instructor-profile/order-11.png";
import image12 from "@/../public/images/instructor-profile/order-12.png";
import image2 from "@/../public/images/instructor-profile/order-2.png";
import image3 from "@/../public/images/instructor-profile/order-3.png";
import image4 from "@/../public/images/instructor-profile/order-4.png";
import image5 from "@/../public/images/instructor-profile/order-5.png";
import image6 from "@/../public/images/instructor-profile/order-6.png";
import image7 from "@/../public/images/instructor-profile/order-7.png";
import image8 from "@/../public/images/instructor-profile/order-8.png";
import image9 from "@/../public/images/instructor-profile/order-9.png";

import { v4 as uuidv4 } from "uuid";

export const orderListData = [
  {
    id: uuidv4(),
    image: image1,
    coursesName: "Data Science Essentials",
    orderId: "23401",
    orderDate: "27/10/23",
    price: 750,
    payment: "Credit Card",
    index: 1,
  },
  {
    id: uuidv4(),
    image: image2,
    coursesName: "Graphic Design Mastery",
    orderId: "23402",
    orderDate: "27/10/23",
    price: 750,
    payment: "Paypal",
    index: 2,
  },
  {
    id: uuidv4(),
    image: image3,
    coursesName: "Photography for Beginners",
    orderId: "23417",
    orderDate: "27/10/23",
    price: 150,
    payment: "Credit Card",
    index: 3,
  },
  {
    id: uuidv4(),
    image: image4,
    coursesName: "Artificial Intelligence Basics",
    orderId: "23405",
    orderDate: "27/10/23",
    price: 350,
    payment: "Free",
    index: 4,
  },
  {
    id: uuidv4(),
    image: image5,
    coursesName: "Creative Writing Workshop",
    orderId: "23404",
    orderDate: "27/10/23",
    price: 350,
    payment: "Paypal",
    index: 5,
  },
  {
    id: uuidv4(),
    image: image6,
    coursesName: "Languages of the World",
    orderId: "23420",
    orderDate: "27/10/23",
    price: 650,
    payment: "Credit Card",
    index: 6,
  },
  {
    id: uuidv4(),
    image: image7,
    coursesName: "Mobile App Development",
    orderId: "23424",
    orderDate: "27/10/23",
    price: 350,
    payment: "Credit Card",
    index: 7,
  },
  {
    id: uuidv4(),
    image: image8,
    coursesName: "Game Design Principles",
    orderId: "23426",
    orderDate: "27/10/23",
    price: 650,
    payment: "Paypal",
    index: 8,
  },
  {
    id: uuidv4(),
    image: image9,
    coursesName: "Cybersecurity Basics",
    orderId: "23427",
    orderDate: "27/10/23",
    price: 350,
    payment: "Credit Card",
    index: 9,
  },
  {
    id: uuidv4(),
    image: image10,
    coursesName: "Public Speaking Mastery",
    orderId: "23400",
    orderDate: "27/10/23",
    price: 650,
    payment: "Credit Card",
    index: 10,
  },
  {
    id: uuidv4(),
    image: image11,
    coursesName: "Fashion Design Essentials",
    orderId: "23421",
    orderDate: "27/10/23",
    price: 350,
    payment: "Credit Card",
    index: 11,
  },
  {
    id: uuidv4(),
    image: image12,
    coursesName: "Languages of the World",
    orderId: "23408",
    orderDate: "27/10/23",
    price: 650,
    payment: "Paypal",
    index: 12,
  },
];
