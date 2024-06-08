import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 3.5 }}
      className="absolute z-10 top-0 w-full h-10 bg-white flex justify-around items-center 900:h-14 xl:h-16"
    >
      <a href="" className="bg-[#4DAF40] p-1 rounded-xl text-white text-sm 900:text-base xl:text-lg">Contact</a>
      <a href="">
        <img src={logo} alt="royan energy" className="w-8 900:w-12 xl:w-14" />
      </a>
      <a href="" className="bg-[#4DAF40] p-1 rounded-xl text-white text-sm 900:text-base xl:text-lg">About</a>
    </motion.div>
  );
};

export default Nav;
