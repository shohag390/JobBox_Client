import { motion } from "motion/react";
import image1 from "../../assets/images/banner1.png";
import image2 from "../../assets/images/banner2.png";
import image3 from "../../assets/images/banner3.png";
import image4 from "../../assets/images/banner4.png";
import image5 from "../../assets/images/banner5.png";
import image6 from "../../assets/images/banner6.png";
import company1 from "../../assets/images/acer.svg";
import company2 from "../../assets/images/microsoft.svg";
import company3 from "../../assets/images/nokia.svg";
import company4 from "../../assets/images/sony.svg";

const company = [
  {
    id: 1,
    icone: company1,
  },
  {
    id: 2,
    icone: company2,
  },
  {
    id: 3,
    icone: company3,
  },
  {
    id: 4,
    icone: company4,
  },
];

const Hero = () => {
  return (
    <section
      className="h-full lg:h-[90vh] 2xl:h-[89vh] w-full px-5 md:px-12 lg:px-37 2xl:px-50 py-12 md:py-15 lg:py-0 flex flex-col
     lg:flex-row lg:justify-between lg:items-center lg:gap-5 2xl:gap-8 bg-[#ffffff]"
    >
      {/* Left Side */}
      <div className="w-full lg:w-1/2">
        <h1 className="pb-2 md:pb-3 lg:pb-4 2xl:pb-5 text-[#05264e] text-[30px] md:text-[40px] lg:text-[45px] 2xl:text-[50px] font-medium lg:font-semibold 2xl:font-bold">
          Find Jobs, Hire Creatives
        </h1>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#4f5e64] text-justify">
          Each month, more than 3 million job seekers turn to website in their
          search for work, making over 140,000 applications every single day
        </p>
        <div className="py-5 md:py-6 lg:py-7 flex items-center gap-4 md:gap-5 lg:gap-6 2xl:gap-7">
          <button className="border border-[#3c65f5] hover:border-[#05264e] bg-[#3c65f5] hover:bg-[#05264e] py-2 lg:py-2.5 2xl:py-3 px-6 md:px-7 lg:px-8 2xl:px-10 text-[#ffffff] rounded-lg duration-500 active:scale-110">
            Get Started
          </button>
          <button className="border border-[#3c65f5] hover:border-[#05264e] hover:bg-[#05264e] py-2 lg:py-2.5 2xl:py-3 px-6 md:px-7 lg:px-8 2xl:px-10 text-[#3c65f5] hover:text-[#ffffff] rounded-lg duration-500 active:scale-110">
            Learn More
          </button>
        </div>
        <div>
          <h4 className="font-medium text-[16px] text-[#4f5e64] pb-3 md:pb-4">
            Trusted by
          </h4>
          <ul className="flex items-center gap-5 ">
            {company?.map((item) => (
              <li key={item?.id}>
                <img src={item?.icone} alt="company_logo" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tight Side */}
      <div className="h-full lg:w-1/2 bg-[url('/src/assets/images/bg-banner.png')] bg-no-repeat bg-center lg:bg-size-[60vh] 2xl:bg-size-[65vh] lg:flex lg:items-center lg:justify-center hidden relative">
        {/* center */}
        <motion.img
          animate={{ y: [-12, 12, -12], x: [0, 5, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute lg:h-55 2xl:h-70"
          src={image1}
          alt="banner1"
        />

        {/* bottom, right */}
        <motion.img
          animate={{ x: [-15, 15, -15], y: [0, -10, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute lg:bottom-60 2xl:bottom-50 lg:right-5 2xl:right-15 lg:h-36 2xl:h-40"
          src={image2}
          alt="banner2"
        />

        {/* top, right */}
        <motion.img
          animate={{ y: [-15, 15, -15], x: [0, -8, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute lg:top-34 2xl:top-35 lg:right-30 2xl:right-26 lg:h-36 2xl:h-40"
          src={image3}
          alt="banner3"
        />

        {/* top left */}
        <motion.img
          animate={{ y: [10, -15, 10], x: [0, 8, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute lg:top-50 2xl:top-35 lg:left-18 2xl:left-26 lg:h-36 2xl:h-40"
          src={image4}
          alt="banner4"
        />

        {/* bottom left */}
        <motion.img
          animate={{ y: [-15, 15, -15], x: [0, -10, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute lg:bottom-28 2xl:bottom-50 lg:left-60 2xl:left-16 lg:h-36 2xl:h-40"
          src={image5}
          alt="banner5"
        />

        {/* bottom center */}
        <motion.img
          animate={{ y: [15, -20, 15], x: [-8, 8, -8], rotate: [0, 2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute lg:bottom-60 2xl:bottom-16 lg:left-10 2xl:left-80 lg:h-36 2xl:h-40"
          src={image6}
          alt="banner6"
        />
      </div>
    </section>
  );
};

export default Hero;
