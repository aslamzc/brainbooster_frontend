import { IconBrandZapier } from "@tabler/icons-react";

const AnimateScroll = () => {
  return (
    <section className=" overflow-hidden pb-5">
      <div className="py-10 md:py-100px">
        <div className=" relative h-[120px] w-[120%] -translate-x-5 -rotate-[5deg] overflow-hidden !whitespace-nowrap bg-primaryColor px-0 pb-10 pt-10 shadow-five">
          <div className="marquee-inner to-left absolute inline-flex w-[200%] ">
            <ul className="float-left flex w-[50%]">
              <li className="marquee-item float-left  flex items-center gap-[50px] ">
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">ReactJS Courses</span>
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">NextJS Courses</span>
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">NodeJS Courses</span>
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">PHP Courses</span>
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">LaravelCourses</span>
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">VueJs Courses</span>
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">Java Courses</span>
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">CSS Courses</span>
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">LaravelCourses</span>
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">VueJs Courses</span>
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">Java Courses</span>
                <IconBrandZapier size={16} />
                <span className="h3 font-semibold ">CSS Courses</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimateScroll;
