import ButtonUnderLine from "@/components/button/ButtonUnderLine";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H2 from "@/components/sharedComponents/H2";
import H3 from "@/components/sharedComponents/H3";
import H4 from "@/components/sharedComponents/H4";
import H6 from "@/components/sharedComponents/H6";
import Li from "@/components/sharedComponents/Li";
import SidebarSearchBox from "@/components/sharedComponents/SidebarSearchBox";
import TextM from "@/components/sharedComponents/TextM";
import TextS from "@/components/sharedComponents/TextS";
import TextXL from "@/components/sharedComponents/TextXL";
import Ul from "@/components/sharedComponents/Ul";
import { IconDownload, IconFileInvoice } from "@tabler/icons-react";
import { privacyPolicyData } from "../../../../public/data/privacyPolicyData";

const PrivacyPolicyContent = () => {
  return (
    <div>
      <div className="container padding-b-80 grid-cols-12 gap-6 xl:grid">
        <div className=" padding-t-60 col-start-1 col-end-9">
          <div className="gap-40px flex flex-col">
            <div className="flex flex-col gap-4">
              <H2>Information We Collect</H2>
              <TextM>
                Thank you for choosing Edufast! Your privacy is important to us,
                and we are committed to protecting your personal information.
                This Privacy Policy explains how Edufast collects, uses,
                discloses, and safeguards your information when you use our
                education and online course platform, including any community
                features.
              </TextM>
            </div>
            <div className="flex flex-col gap-4">
              <H3>Account Information:</H3>
              <Ul>
                <Li>
                  When you create an account, we collect your name, email
                  address, and other necessary details to create and manage your
                  account.
                </Li>
                <Li>
                  We implement security measures to protect your information
                  from unauthorized access, disclosure, alteration, or
                  destruction.
                </Li>
              </Ul>
            </div>

            <div className="flex flex-col gap-4">
              <h5 className="h4 font-semibold">Course Enrollment:</h5>
              <Ul>
                <Li>
                  If you enroll in a course, we collect information related to
                  your course progress, performance, and completion.
                </Li>
                <Li>
                  You can opt-out of promotional emails, but we will still send
                  essential communications related to your account and courses.
                </Li>
              </Ul>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="h5 font-semibold">Community Participation:</h5>
              <Ul>
                <Li>
                  When you engage in community discussions or forums, we collect
                  information related to your posts, comments, and interactions
                  with other users.
                </Li>
              </Ul>
            </div>
            <div className="flex flex-col gap-4">
              <H6> Payment Information:</H6>
              <Ul>
                <Li>
                  If you make a purchase, we collect payment information, such
                  as credit card details, to process transactions securely.
                </Li>
                <Li>
                  We may update this Privacy Policy periodically, and any
                  changes will be posted on this page. It&apos;s your
                  responsibility to review the policy for updates.
                </Li>
              </Ul>
              <TextM className="mt-2">
                Please remember to replace &quot;Date&quot; and
                &quot;Contact&quot; with the actual date and contact information
                for your platform. Additionally, ensure that the policy aligns
                with the legal requirements applicable to your region.
              </TextM>
            </div>
          </div>
        </div>
        <div className="col-start-9 col-end-13">
          <div className=" padding-t-40 sticky top-32 flex flex-col gap-6 xl:-mt-32">
            <div className="relative z-10">
              <SidebarSearchBox
                className="border-neutral-30 bg-neutral-20"
                placeholder="Search Policy..."
              />
            </div>
            <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
              <H4>More Some Policy</H4>
              <BorderHorizontalN40 />
              <div className="flex flex-col gap-6">
                {privacyPolicyData.map(({ id, title, text }, index) => (
                  <>
                    <div
                      key={id}
                      className="flex items-center justify-between gap-3 sm:gap-6"
                    >
                      <div className="rounded-full border-neutral-30 bg-neutral-20 p-3">
                        <IconFileInvoice size={32} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <TextXL>{title}</TextXL>
                        <TextS>{text}</TextS>
                      </div>
                      <button className="rounded-full border-neutral-30 bg-neutral-20 p-3">
                        <IconDownload size={32} />
                      </button>
                    </div>
                    <div
                      className={` ${
                        index === privacyPolicyData.length - 1 && "hidden"
                      }`}
                    >
                      <BorderHorizontalN40 />
                    </div>
                  </>
                ))}
                <BorderHorizontalN40 />
                <ButtonUnderLine buttonText="See All" link="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;
