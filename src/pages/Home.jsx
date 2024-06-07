import { useEffect, useState } from "react";
import Intro from "../components/Intro";
import Header from "../components/Header";

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
    </div>
  );
};

export default Home;
