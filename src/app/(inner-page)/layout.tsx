import FooterHomeOne from "@/components/footer/FooterHomeOne";
import NavbarFour from "@/components/navbar/NavbarFour";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BrainBooster",
  description: "",
};

export default function InnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarFour />
      {children}
      {/* <FooterHomeOne /> */}
    </>
  );
}
