/* eslint-disable react/prop-types */
import loader from "../assets/loader.gif";

const Intro = (props) => {
  return (
    <div
      className={`justify-center items-center absolute bg-white w-full h-screen ${
        props.display ? "z-30 flex" : "-z-10 hidden"
      }`}
    >
      <img
        src={loader}
        alt="royan energy"
        className={`transition-all w-8/12 md:w-5/12 lg:w-4/12 xl:w-3/12 ${props.show ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

export default Intro;
