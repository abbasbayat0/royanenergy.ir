import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import logo from "../assets/logo.png";

const Contact = () => {
  const ref = useRef();
  const view = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (view) animation.start({ y: 0, opacity: 1 });
  }, [view, animation]);
  return (
    <motion.div
      id="contact"
      initial={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      animate={animation}
      ref={ref}
      className="w-full mt-20"
    >
      <div className="bg-[#1F2332] mt-5 mx-auto p-5 flex flex-col justify-around relative">
        <div>
          <div className="flex items-center gap-2 justify-start ml-5">
            <div className="w-10 h-[2px] rounded-xl bg-[#4daf40] sm:w-8"></div>
            <p className="text-[#4daf40] font-roboto font-semibold text-md sm:tracking-widest sm:text-sm">
              CONTACT US
            </p>
          </div>
          <h2 className="ml-5 font-lexend text-4xl font-medium opacity-90 mt-2 sm:text-xl md:text-2xl text-white">
            Talk To Us
          </h2>
        </div>
        <div className="flex justify-center items-start flex-col w-80 mt-10 gap-8 mb-10">
          <div className="flex gap-5 justify-center items-center">
            <i className="fa-solid fa-signs-post text-2xl text-white opacity-90"></i>
            <p className="text-white font-roboto" title="Post Code">
              6516763863
            </p>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <i className="fa-solid fa-phone text-2xl text-white opacity-90"></i>
            <div>
              <p className="text-white font-roboto">+98 081 38330570</p>
              <p className="text-white font-roboto">+98 9390403540</p>
            </div>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <i className="fa-solid fa-envelope text-2xl text-white opacity-90"></i>
            <p className="text-white font-roboto">mail@royanenergy.ir</p>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <i className="fa-solid fa-location-dot text-2xl text-white opacity-90"></i>
            <p className="text-white font-roboto">
              Iran, Hamedan, Shahid Dibaj St., Science and Technology Park, 3rd
              fl, Unit 22
            </p>
          </div>
        </div>

        <div
          title="Go Up"
          onClick={() =>
            document
              .getElementById("home")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="absolute bottom-10 right-10 w-10 h-10 cursor-pointer"
        >
          <img src={logo} alt="royan energy" />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
