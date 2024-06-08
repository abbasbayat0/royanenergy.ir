import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Contact = () => {
  const ref = useRef();
  const view = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (view) animation.start({ y: 0, opacity: 1 });
  }, [view, animation]);
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.6, delay: .5}}
      animate={animation}
      ref={ref}
      className="w-full mt-20"
    >
      <div className="bg-[#1F2332] mt-5 mx-auto p-5 flex flex-col justify-around">
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
        <div className="flex items-center gap-5 w-60">
          <div className="flex flex-col gap-5 mt-10 mx-auto">
            <i className="fa-solid fa-phone text-2xl text-white opacity-90"></i>
            <i className="fa-solid fa-envelope text-2xl text-white opacity-90"></i>
            <i className="fa-solid fa-location-dot text-2xl text-white opacity-90"></i>
          </div>
          <div className="flex flex-col gap-8 mt-10 mx-auto">
            <p className="text-white font-roboto">+98 9034035225</p>
            <p className="text-white font-roboto">mail@royanenergy.ir</p>
            <p className="text-white font-roboto">Iran, Hamedan Province</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
