import FooterHomeOne from "@/components/footer/FooterHomeOne";
import NavbarOne from "@/components/navbar/NavbarOne";
import InstructorProfileBanner from "@/components/pages/instructor-profile/InstructorProfileBanner";
import StudentProfileSideBar from "@/components/pages/student-profile/dashboard/StudentProfileSideBar";
import type { Metadata } from "next";
import { instructorProfileSidebarData } from "../../../public/data/instructorProfileSidebarData";

export const metadata: Metadata = {
  title: "Instructor Profile  - Education & Online Course With Community",
  description: "Education & Online Course With Community",
};

export default function InnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-20">
      <NavbarOne />
      <InstructorProfileBanner />
      <div className="container padding-b-80 relative grid-cols-4 gap-6 pt-6 xl:grid">
        {/* student profile sidebar start */}
        <div>
          <StudentProfileSideBar
            instructorProfile={true}
            sidebarData={instructorProfileSidebarData}
          />
        </div>
        {/* student profile sidebar end */}
        <div className="col-start-2 col-end-5 flex flex-col gap-6">
          {children}
        </div>
      </div>
      <FooterHomeOne />
    </div>
  );
}
