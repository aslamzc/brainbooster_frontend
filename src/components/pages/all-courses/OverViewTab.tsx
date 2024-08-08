import Li from "@/components/sharedComponents/Li";
import Ul from "@/components/sharedComponents/Ul";

const OverViewTab = () => {
  return (
    <div className="padding-all-32 flex flex-col justify-between gap-10 rounded-16px bg-white">
      <div>
        <h2 className="h2 font-semibold">Bio Data</h2>
        <p className="mt-6 text-mText">
          Isra Ahmed is a seasoned UI/UX designer with over a decade of
          experience in the tech industry. She is known for her passion for
          creating meaningful and user-centric designs that seamlessly blend
          aesthetics with functionality. Sarah has worked with both startups and
          established companies, contributing to the success of numerous digital
          products.
        </p>
      </div>
      <div>
        <h2 className="h3 font-semibold">Education:</h2>
        <Ul className="mt-4 ps-6 text-mText">
          <Li>
            Bachelor&apos;s Degree in Interaction Design from [University Name]
          </Li>
          <Li>
            Master&apos;s Degree in Human-Computer Interaction from [University
            Name]
          </Li>
        </Ul>
      </div>
      <div>
        <h2 className="h4 font-semibold">Professional Experience:</h2>
        <Ul className="mt-4 ps-6 text-mText">
          <Li>Senior UX Designer at XYZ Tech Solutions (Current)</Li>
          <Li>Lead UI/UX Designer at Innovative Designs Inc.</Li>
          <Li>UX Consultant for various startups</Li>
          <Li>
            Contributed to the design of award-winning mobile apps and websites
          </Li>
        </Ul>
      </div>
      <div>
        <h2 className="h5 font-semibold">Skills:</h2>
        <Ul className="mt-4 ps-6 text-mText">
          <Li> User Research</Li>
          <Li> Wireframing and Prototyping</Li>
          <Li> Information Architecture</Li>
          <Li> Usability Testing</Li>
          <Li> Interaction Design</Li>
          <Li> Visual Design</Li>
          <Li> Collaboration with Developers</Li>
        </Ul>
      </div>
      <div>
        <h2 className="h6 font-semibold">Teaching Approach:</h2>
        <Ul className="mt-4 ps-6 text-mText">
          <Li>
            Isra Ahmed is passionate about empowering aspiring designers with
            practical skills and insights into the world of UI/UX. Her teaching
            approach emphasizes hands-on projects, real-world scenarios, and
            collaboration. She believes in nurturing creativity while instilling
            a strong foundation in design principles and user psychology.
          </Li>
        </Ul>
      </div>
    </div>
  );
};

export default OverViewTab;
