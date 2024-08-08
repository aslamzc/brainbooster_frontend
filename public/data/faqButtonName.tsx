import { IconCreditCard, IconTag, IconVersions } from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";
export const faqButtonName = [
  { id: uuidv4(), icon: <IconVersions />, buttonName: "Online Education" },
  { id: uuidv4(), icon: <IconCreditCard />, buttonName: "Payment Method" },
  { id: uuidv4(), icon: <IconTag />, buttonName: "Pricing Plan" },
];
