import background from "../assets/background.png";
import banner from "../assets/banner.png";
import { motion } from "framer-motion";
import Nav from "./Nav";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3 }}
      className="flex justify-center items-center shadow-lg"
    >
      <Nav />

      {/* background */}
      <div className="w-full h-72 overflow-hidden relative sm:h-96 md:h-[500px] lg:h-[550px] xl:h-[600px] 1400:h-[700px]">
        <img src={background} alt="royan energy" className="min-w-[130%] 550:min-w-[110%] md:min-w-[120%] 900:absolute 900:-bottom-52 lg:-bottom-80" />
        {/* float banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
          className="w-10/12 h-3/5 flex justify-center items-end overflow-hidden absolute top-16 left-1/2 -translate-x-1/2 rounded-sm 375:h-1/2 375:top-24 425:w-8/12 550:h-3/5 550:top-20 sm:h-1/2 sm:w-7/12 sm:-translate-x-0 sm:left-[4%] sm:top-28 md:top-40 md:left-[10%] 900:top-28 900:w-6/12 lg:w-5/12 lg:left-[20%]"
        >
          <img src={banner} alt="royan energy" />
          <h1 className="font-lexend text-2xl font-semibold absolute top-10 opacity-85 left-1/2 -translate-x-1/2 text-nowrap 375:top-7 550:text-3xl 550:top-5 md:text-4xl md:top-12 md:-translate-x-0 md:left-[6%] lg:top-16 xl:text-5xl 1400:text-6xl 1400:left-[2%]">
            Smart Wind Farms
          </h1>
          <p className="font-roboto w-full text-[9px] px-1 text-center absolute top-[80px] opacity-90 left-1/2 -translate-x-1/2 375:top-[70px] 550:text-[12px] 550:top-[60px] sm:top-[70px] md:text-sm md:top-[100px] md:text-left md:left-[56%] md:pr-10 lg:top-[120px] xl:text-base xl:pr-36 xl:top-[130px] 1400:top-[140px] 1400:text-xl 1400:left-[52%]">
            We have been destroying the forests for whatever reasons for forests
            that work much like our lungs
          </p>
          <a
            href=""
            className="bg-[#4DAF40] absolute top-[125px] text-[9px] rounded-lg p-3 py-1  text-white 375:top-[110px] 550:text-[12px] 550:top-[120px] sm:top-[130px] md:top-[180px] md:text-sm md:p-3 md:px-4 md:left-[6%] lg:top-[200px] xl:top-[220px] xl:px-5 1400:text-lg 1400:top-[240px] 1400:left-[3%]"
          >
            Read More
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
