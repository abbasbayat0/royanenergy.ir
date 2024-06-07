import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 3.5 }}
      className="absolute z-10 top-0 w-full h-10 bg-white flex justify-around items-center"
    >
      <a href="" className="bg-[#4DAF40] p-1 rounded-xl text-white text-sm">Contact</a>
      <a href="">
        <img src={logo} alt="royan energy" className="w-8" />
      </a>
      <a href="" className="bg-[#4DAF40] p-1 rounded-xl text-white text-sm">About</a>
    </motion.div>
  );
};

export default Nav;
