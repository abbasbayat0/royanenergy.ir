import { useEffect, useRef, useState } from "react";
import person from "../assets/person.png";
import pngOne from "../assets/1.png";
import pngTwo from "../assets/2.png";
import pngThree from "../assets/3.png";
import pngFour from "../assets/4.png";
import { useAnimation, useInView, motion } from "framer-motion";

const About = () => {
  const ref = useRef();
  const view = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (view) animation.start({ x: 0, opacity: 1 });
  }, [view, animation]);

  const [textID, changeTextID] = useState(1);
  const texts = [
    "At Royan Energy Milad Noor, we are dedicated to harnessing the power of renewable energy to create a sustainable future. Since our inception in 2016, we have been providing consultancy and project management services in the field of renewable energy.Our focus is on producing electricity through wind turbines and solar panels, striving to improve and innovate in renewable energy technologies.",
    "Our missing is to promote the sustainable utilization of energy resources and advance the technologies that make this possible. We believe in the potential of renewable energy to address environmental challenges and contribute to a cleaner, healthier planet. ",
    "Our expert team in research and development works tirelessly to enhance the efficiency and effectiveness of our energy production processes. We are committed to reducing environmental impact and leading the way in the renewable energy sector in Iran.",
    "In addition to our technical expertise, we pride ourselves on our collaborative approach, working closely with clients to tailor solutions that meet their specific needs. Our commitment to excellence and sustainability drives us to continuously seek out new opportunities for growth and innovation. Join us on our journey towards a sustainable future, powered by the endless possibilities of renewable energy.",
  ];

  return (
    <div className="w-full flex flex-col items-center mt-10 sm:flex-row sm:max-h-96 sm:pb-20 md:max-h-[500px]">
      {/* picture */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        transition={{ duration: 0.6, delay: 4 }}
        animate={animation}
        className="w-11/12 relative sm:ml-2"
      >
        <img ref={ref} src={person} alt="royan energy" />
        <div className="w-11/12 rounded-xl bg-white shadow-lg h-28 absolute -bottom-12 left-1/2 -translate-x-1/2 flex justify-center flex-col items-center xl:w-10/12 xl:-ml-6">
          <p className="font-roboto text-4xl text-[#4DAF40] font-bold">
            10 Years
          </p>
          <p className="font-slab font-semibold mt-2">EXPERIENCE IN ENERGY</p>
        </div>
      </motion.div>
      {/* about */}
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        transition={{ duration: 0.6, delay: 4 }}
        animate={animation}
        className="mt-20 w-full"
      >
        {/* about us */}
        <div className="flex items-center gap-2 justify-start ml-5">
          <div className="w-10 h-[2px] rounded-xl bg-[#4daf40] sm:w-8"></div>
          <p className="text-[#4daf40] font-roboto font-semibold text-md sm:tracking-widest sm:text-sm">
            ABOUT US
          </p>
        </div>
        {/* texts */}
        <h2 className="ml-5 font-lexend text-4xl font-medium opacity-90 mt-2 sm:text-xl md:text-2xl lg:text-3xl">
          Welcome To Royan Energy Milad Noor
        </h2>
        <p className="px-5 font-roboto opacity-60 mt-3 sm:text-[10px] md:text-sm lg:text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        {/* icons */}
        <div className="flex w-full justify-around items-center mt-5 sm:justify-center sm:gap-5 sm:mt-2">
          <div
            onClick={() => {
              changeTextID(1);
            }}
            className={`transition-all w-16 h-16 rounded-xl border flex justify-center items-center sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 ${
              textID == 1 && "bg-[#4daf40] shadow-md"
            }`}
          >
            <img src={pngOne} alt="royan energy" className="min-w-[120%]" />
          </div>
          <div
            onClick={() => {
              changeTextID(2);
            }}
            className={`transition-all w-16 h-16 rounded-xl border flex justify-center items-center sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 ${
              textID == 2 && "bg-[#4daf40] shadow-md"
            }`}
          >
            <img src={pngTwo} alt="royan energy" className="w-8/12" />
          </div>
          <div
            onClick={() => {
              changeTextID(3);
            }}
            className={`transition-all w-16 h-16 rounded-xl border flex justify-center items-center sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 ${
              textID == 3 && "bg-[#4daf40] shadow-md"
            }`}
          >
            <img src={pngThree} alt="royan energy" className="w-8/12" />
          </div>
          <div
            onClick={() => {
              changeTextID(4);
            }}
            className={`transition-all w-16 h-16 rounded-xl border flex justify-center items-center sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 ${
              textID == 4 && "bg-[#4daf40] shadow-md"
            }`}
          >
            <img src={pngFour} alt="royan energy" className="w-8/12" />
          </div>
        </div>
        <p className="pl-5 pr-3 font-lexend mt-3 opacity-70 mb-5 sm:text-[10px] sm:mb-2 sm:mt-2 md:text-sm lg:text-base lg:mb-10">
          {texts[textID - 1]}
        </p>
        <a
          href=""
          className="bg-[#4DAF40] shadow-lg text-white font-roboto ml-5 py-4 px-5 rounded-xl sm:text-[10px] sm:py-2 sm:px-4 lg:text-base"
        >
          Read More
        </a>
      </motion.div>
    </div>
  );
};

export default About;
