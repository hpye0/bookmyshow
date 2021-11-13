import react from "react";
// components
import Navbar from "../components/navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      <HeroCarousal />
      {props.children}
    </>
  );
};

export default DefaultLayout;
