import FooterHomeOne from "@/components/footer/FooterHomeOne";
import DashBoardBanner from "@/components/pages/student-profile/dashboard/DashBoardBanner";
import StudentProfileSideBar from "@/components/pages/student-profile/dashboard/StudentProfileSideBar";
import type { Metadata } from "next";
import { studentProfileSidebarData } from "../../../public/data/studentProfileSidebarData";
import NavbarFour from "@/components/navbar/NavbarFour";

export const metadata: Metadata = {
  title: "Student Profile  - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-20">
      <NavbarFour />
      <div className="container padding-b-80 relative grid-cols-4 gap-6 pt-6 xl:grid">
        <div>
          <StudentProfileSideBar
            instructorProfile={false}
            sidebarData={studentProfileSidebarData}
          />
        </div>
        <div className="col-start-2 col-end-5 flex flex-col gap-6">
          {children}
        </div>
      </div>
      <FooterHomeOne />
    </div>
  );
}