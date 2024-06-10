import { useEffect, useState } from "react";
import Intro from "../components/Intro";
import Header from "../components/Header";
import About from "../components/About";
import Team from "../components/Team";
import Contact from "../components/Contact";

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

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="relative scroll-smooth" id="home">
      <Intro show={show} display={display} />
      <Header />
      <About />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
