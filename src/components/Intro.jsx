/* eslint-disable react/prop-types */
import loader from "../assets/loader.gif";

const Intro = (props) => {
  return (
    <div
      className={`justify-center items-center bg-white w-full h-screen ${
        props.display ? "z-10 flex" : "-z-10 hidden"
      }`}
    >
      <img
        src={loader}
        alt="royan energy"
        className={`transition-all ${props.show ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

export default Intro;
