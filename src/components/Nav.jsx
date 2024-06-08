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
      <a
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" })
        }
        className="bg-[#4DAF40] p-1 rounded-xl text-white text-sm 900:text-base xl:text-lg cursor-pointer"
      >
        Contact
      </a>
      <a
        onClick={() =>
          document.getElementById("home").scrollIntoView({ behavior: "smooth" })
        }
      >
        <img src={logo} alt="royan energy" className="w-8 900:w-12 xl:w-14 cursor-pointer" />
      </a>
      <a
        onClick={() =>
          document
            .getElementById("about")
            .scrollIntoView({ behavior: "smooth" })
        }
        className="bg-[#4DAF40] p-1 rounded-xl text-white text-sm 900:text-base xl:text-lg cursor-pointer"
      >
        About
      </a>
    </motion.div>
  );
};

export default Nav;
