import FooterHomeOne from "@/components/footer/FooterHomeOne";
import NavbarOne from "@/components/navbar/NavbarOne";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inner Pages - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

export default function InnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarOne />
      {children}
      <FooterHomeOne />
    </>
  );
}
