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
      className="flex justify-center items-center"
    >
      <Nav />

      {/* background */}
      <div className="w-full h-60 overflow-hidden relative">
        <img src={background} alt="royan energy" className="min-w-[120%]" />
        {/* float banner */}
        <div className="w-10/12 h-3/5 flex justify-center items-end overflow-hidden absolute top-16 left-1/2 -translate-x-1/2 rounded-sm">
          <img src={banner} alt="royan energy" />
          <h1 className="font-lexend text-2xl font-semibold absolute top-6 opacity-85 left-1/2 -translate-x-1/2 text-nowrap">
            Smart Wind Farms
          </h1>
          <p className="font-roboto w-full text-[10px] px-1 text-center absolute top-[60px] opacity-90 left-1/2 -translate-x-1/2 ">
            We have been destroying the forests for whatever reasons for forests
            that work much like our lungs
          </p>
          <a href="" className="bg-[#4DAF40] absolute top-[105px] text-[10px] rounded-lg p-3 py-1  text-white">Read More</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
