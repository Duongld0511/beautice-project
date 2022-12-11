import React from "react";
import AboutUs from "../components/clientComponent/AboutUs";
import ContactUs from "../components/clientComponent/ContactUs";
import CoreService from "../components/clientComponent/CoreService";
import MainSlider from "../components/clientComponent/MainSlider";
import ProfessionalTeams from "../components/clientComponent/ProfessionalTeams";
import Bubble1 from "./../assets/images/BackgroundBubble1.png";
import Bubble2 from "./../assets/images/BackgroundBubble2.png";
import Slide from "./../assets/images/SlideBackground.png";
const HomePage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Slide})`,
          backgroundRepeat: "no-repeat",
        }}
        className="h-[880px] pt-[160px]"
      >
        <MainSlider />
      </div>
      <div className="container mx-auto">
        <div
          style={{
            backgroundImage: `url(${Bubble1})`,
            backgroundRepeat: "no-repeat",
          }}
          className="bg-right-bottom container mx-auto"
        >
          <CoreService />
          <AboutUs />
        </div>
        <div
          style={{
            backgroundImage: `url(${Bubble2})`,
            backgroundRepeat: "no-repeat",
          }}
          className="bg-left-bottom container mx-auto"
        >
          <ProfessionalTeams />
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
