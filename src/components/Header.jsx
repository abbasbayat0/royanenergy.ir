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
        <img
          src={background}
          alt="royan energy"
          className="min-w-[130%] 550:min-w-[110%] md:min-w-[120%] 900:absolute 900:-bottom-52 lg:-bottom-80"
        />
        {/* float banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
          className="w-10/12 h-3/5 flex justify-center items-end overflow-hidden absolute top-16 left-1/2 -translate-x-1/2 rounded-sm 375:h-1/2 375:top-24 425:w-8/12 550:h-3/5 550:top-20 sm:h-1/2 sm:w-7/12 sm:-translate-x-0 sm:left-[4%] sm:top-28 md:top-40 md:left-[10%] 900:top-28 900:w-6/12 lg:w-5/12 lg:left-[20%]"
        >
          <img src={banner} alt="royan energy" />
          <h1 className="font-lexend w-11/12 text-md font-bold absolute top-8 opacity-85 left-1/2 -translate-x-1/2 375:top-3 550:text-2xl 550:top-2 md:text-3xl md:top-5 md:-translate-x-0 md:left-[6%] xl:text-4xl 1400:top-14 1400:left-[2%]">
            Moving toward Sustainable Energy Resources
          </h1>
          <p className="font-roboto w-full text-[9px] px-1 text-center absolute top-[90px] opacity-90 left-1/2 -translate-x-1/2 375:top-[70px] 550:text-[12px] 550:top-[75px] sm:top-[80px] md:text-sm md:top-[130px] md:text-left md:left-[56%] md:pr-10 lg:top-[150px] xl:text-base xl:pr-36 1400:text-xl 1400:left-[52%]">
            We have been destroying our environment and natural resources by
            producing low-efficiency energy. The future of our upcoming
            generation is in imminent danger. In our opinion, we should act
            swiftly and precisely by replacing sustainable energy resources with
            fossil fuels.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
