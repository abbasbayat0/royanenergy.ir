import pouria from "../assets/pouria.png"
import tat from "../assets/tat.png"
import arman from "../assets/arman.png"
import milad from "../assets/milad.png"

const Team = () => {
  return (
    <div className="mt-20 w-full">
      <div className="flex items-center gap-2 justify-start ml-5">
        <div className="w-10 h-[2px] rounded-xl bg-[#4daf40] sm:w-8"></div>
        <p className="text-[#4daf40] font-roboto font-semibold text-md sm:tracking-widest sm:text-sm">
          OUR TEAM
        </p>
      </div>
      <h2 className="ml-5 font-lexend text-4xl font-medium opacity-90 mt-2 sm:text-xl md:text-2xl">
        Our Motivated Team
      </h2>
      <div className="flex flex-col justify-center items-center w-full 425:flex-row 425:flex-wrap 425:gap-10 sm:gap-5 lg:gap-10 xl:gap-20">
        <div className="w-[215px] h-96 relative overflow-hidden mt-10">
          <div className="w-full h-20 bg-gray-200 absolute bottom-0 flex justify-center items-center font-lexend font-bold text-xl md:text-lg rounded-t-lg text-nowrap">
            Seyed Milad Mousavi
          </div>
          <div className="w-0 h-0 absolute top-[20px] right-0 border-b-transparent border-r-[300px] -z-10 border-r-[#4daf40] border-l-transparent border-t-[400px] rounded-lg border-t-transparent "></div>
          <div className="w-52 h-52 overflow-hidden rounded-full absolute top-20">
            <img src={milad} alt="royan energy" />
          </div>
        </div>
        <div className="w-[215px] h-96 relative overflow-hidden mt-10">
          <div className="w-full h-20 bg-gray-200 absolute bottom-0 flex justify-center items-center font-lexend font-bold text-xl md:text-lg rounded-t-lg text-nowrap">
            Alireza Tat
          </div>
          <div className="w-0 h-0 absolute top-[20px] right-0 border-b-transparent border-r-[300px] -z-10 border-r-[#4daf40] border-l-transparent border-t-[400px] rounded-lg border-t-transparent "></div>
          <div className="w-52 h-52 overflow-hidden rounded-full absolute top-20">
            <img src={tat} alt="royan energy" />
          </div>
        </div>
        <div className="w-[215px] h-96 relative overflow-hidden mt-10">
          <div className="w-full h-20 bg-gray-200 absolute bottom-0 flex justify-center items-center font-lexend font-bold text-xl md:text-lg rounded-t-lg text-nowrap">
            Pouria Maleki
          </div>
          <div className="w-0 h-0 absolute top-[20px] right-0 border-b-transparent border-r-[300px] -z-10 border-r-[#4daf40] border-l-transparent border-t-[400px] rounded-lg border-t-transparent "></div>
          <div className="w-52 h-52 overflow-hidden rounded-full absolute top-20">
            <img src={pouria} alt="royan energy" />
          </div>
        </div>
        <div className="w-[215px] h-96 relative overflow-hidden mt-10">
          <div className="w-full h-20 bg-gray-200 absolute bottom-0 flex justify-center items-center font-lexend font-bold text-xl md:text-lg rounded-t-lg text-nowrap">
            Arman Parian Fard
          </div>
          <div className="w-0 h-0 absolute top-[20px] right-0 border-b-transparent border-r-[300px] -z-10 border-r-[#4daf40] border-l-transparent border-t-[400px] rounded-lg border-t-transparent "></div>
          <div className="w-52 h-52 overflow-hidden rounded-full absolute top-20">
            <img src={arman} alt="royan energy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
