import FooterHomeOne from "@/components/footer/FooterHomeOne";
import NavbarOne from "@/components/navbar/NavbarOne";
import Banner from "@/components/pages/home-one/Banner";
import Counter from "@/components/pages/home-one/Counter";
import Courses from "@/components/pages/home-one/Courses";
import CustomersSay from "@/components/pages/home-one/CustomersSay";
import Instructor from "@/components/pages/home-one/Instructor";
import NewsLetter from "@/components/pages/home-one/NewsLetter";
import WhyChooseUs from "@/components/pages/home-one/WhyChooseUs";
import Fade from "@/motionEffect/Fade";

const Home = () => {
  return (
    <>
      <NavbarOne />
      <Banner />
      <Fade>
        <Counter />
      </Fade>
      <Courses />
      <Instructor />
      <WhyChooseUs />
      <CustomersSay />
      <NewsLetter />
      <FooterHomeOne />
    </>
  );
};

export default Home;
