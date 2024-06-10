import pouria from "../assets/pouria.png";
import tat from "../assets/tat.png";
import arman from "../assets/arman .png";
import milad from "../assets/milad.png";
import { useEffect, useRef, useState } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

const Team = () => {
  const [hover, cahngeHover] = useState(0);

  const ref = useRef();
  const view = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (view) animation.start({ y: 0, opacity: 1 });
  }, [view, animation]);

  return (
    <div ref={ref} className="mt-20 w-full">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        animate={animation}
        className="flex items-center gap-2 justify-start ml-5"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          animate={animation}
          className="w-10 h-[2px] rounded-xl bg-[#4daf40] sm:w-8"
        ></motion.div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          animate={animation}
          className="text-[#4daf40] font-roboto font-semibold text-md sm:tracking-widest sm:text-sm"
        >
          OUR TEAM
        </motion.p>
      </motion.div>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        animate={animation}
        className="ml-5 font-lexend text-4xl font-medium opacity-90 mt-2 sm:text-xl md:text-2xl"
      >
        Our Motivated Team
      </motion.h2>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        animate={animation}
        className="flex flex-col justify-center items-center w-full 425:flex-row 425:flex-wrap 425:gap-10 sm:gap-5 lg:gap-10 xl:gap-20"
      >
        <div
          onMouseEnter={() => cahngeHover(1)}
          onMouseLeave={() => cahngeHover(0)}
          className="w-[215px] h-96 relative overflow-hidden mt-10"
        >
          <div className="w-full h-20 bg-gray-200 absolute bottom-0 flex justify-center items-center font-lexend font-bold text-xl md:text-lg rounded-t-lg text-nowrap">
            Seyed Milad Mousavi
          </div>
          <div className="w-0 h-0 absolute top-[20px] right-0 border-b-transparent border-r-[300px] -z-10 border-r-[#4daf40] border-l-transparent border-t-[400px] rounded-lg border-t-transparent "></div>
          <div className="w-52 h-52 overflow-hidden rounded-full absolute top-20">
            <img src={milad} alt="royan energy" />
          </div>
          <div
            className={`flex justify-center items-center w-[150px] h-14 gap-2 absolute bottom-20 left-1/2 transition-all duration-500 -translate-x-1/2 ${
              hover == 1
                ? "translate-y-0 opacity-90"
                : "translate-y-2 opacity-0"
            }`}
          >
            <p className="p-2 text-white font-lexend rounded-xl bg-gray-600 flex transition-all duration-700 justify-center items-center">
              CEO & Founder
            </p>
          </div>
        </div>
        <div
          onMouseEnter={() => cahngeHover(4)}
          onMouseLeave={() => cahngeHover(0)}
          className="w-[215px] h-96 relative overflow-hidden mt-10"
        >
          <div className="w-full h-20 bg-gray-200 absolute bottom-0 flex justify-center items-center font-lexend font-bold text-xl md:text-lg rounded-t-lg text-nowrap">
            Arman Parian Fard
          </div>
          <div className="w-0 h-0 absolute top-[20px] right-0 border-b-transparent border-r-[300px] -z-10 border-r-[#4daf40] border-l-transparent border-t-[400px] rounded-lg border-t-transparent "></div>
          <div className="w-52 h-52 overflow-hidden rounded-full absolute top-20">
            <img src={arman} alt="royan energy" />
          </div>
          <div
            className={`flex justify-center items-center w-[150px] h-14 gap-2 absolute bottom-20 left-1/2 transition-all duration-500 -translate-x-1/2 ${
              hover == 4
                ? "translate-y-0 opacity-90"
                : "translate-y-2 opacity-0"
            }`}
          >
            <p className="p-2 text-white font-lexend text-[12px] rounded-xl bg-gray-600 flex transition-all duration-700 justify-center items-center text-center">Co-founder & Technical Supervisor</p>
          </div>
        </div>
        <div
          onMouseEnter={() => cahngeHover(3)}
          onMouseLeave={() => cahngeHover(0)}
          className="w-[215px] h-96 relative overflow-hidden mt-10"
        >
          <div className="w-full h-20 bg-gray-200 absolute bottom-0 flex justify-center items-center font-lexend font-bold text-xl md:text-lg rounded-t-lg text-nowrap">
            Pouria Maleki
          </div>
          <div className="w-0 h-0 absolute top-[20px] right-0 border-b-transparent border-r-[300px] -z-10 border-r-[#4daf40] border-l-transparent border-t-[400px] rounded-lg border-t-transparent "></div>
          <div className="w-52 h-52 overflow-hidden rounded-full absolute top-20">
            <img src={pouria} alt="royan energy" />
          </div>
          <div
            className={`flex justify-center items-center w-[150px] h-14 gap-2 absolute bottom-20 left-1/2 transition-all duration-500 -translate-x-1/2 ${
              hover == 3
                ? "translate-y-0 opacity-90"
                : "translate-y-2 opacity-0"
            }`}
          >
            <p className="p-2 text-white font-lexend rounded-xl bg-gray-600 flex transition-all duration-700 justify-center items-center text-center text-[12px]">Head of the Project Management Secto</p>
          </div>
        </div>
        <div
          onMouseEnter={() => cahngeHover(2)}
          onMouseLeave={() => cahngeHover(0)}
          className="w-[215px] h-96 relative overflow-hidden mt-10"
        >
          <div className="w-full h-20 bg-gray-200 absolute bottom-0 flex justify-center items-center font-lexend font-bold text-xl md:text-lg rounded-t-lg text-nowrap">
            Alireza Tat
          </div>
          <div className="w-0 h-0 absolute top-[20px] right-0 border-b-transparent border-r-[300px] -z-10 border-r-[#4daf40] border-l-transparent border-t-[400px] rounded-lg border-t-transparent "></div>
          <div className="w-52 h-52 overflow-hidden rounded-full absolute top-20">
            <img src={tat} alt="royan energy" />
          </div>
          <div
            className={`flex justify-center items-center w-[150px] h-14 gap-2 absolute bottom-20 left-1/2 transition-all duration-500 -translate-x-1/2 ${
              hover == 2
                ? "translate-y-0 opacity-90"
                : "translate-y-2 opacity-0"
            }`}
          >
            <p className="p-2 text-white font-lexend text-[12px] rounded-xl bg-gray-600 flex transition-all duration-700 justify-center items-center text-center">
              Programmer& Project Management Expert(R&D)
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
