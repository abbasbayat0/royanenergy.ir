import { useEffect, useState } from "react";
import Intro from "../components/Intro";
import Header from "../components/Header";
import About from "../components/About";
import Team from "../components/Team";

const Home = () => {
  // intro display
  const [show, changeStatus] = useState(true);
  const [display, changeDisplay] = useState(true);
  const once = true;
  useEffect(() => {
    setTimeout(() => {
      changeStatus(false);
    }, 3000);
    setTimeout(() => {
      changeDisplay(false);
    }, 3500);
  }, [once]);
  return (
    <div className="relative">
      <Intro show={show} display={display} />
      <Header />
      <About />
      <Team />
    </div>
  );
};

export default Home;
