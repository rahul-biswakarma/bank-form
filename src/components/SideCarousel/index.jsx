import React from "react";

import { ReactComponent as Pattern } from "../../assets/images/pattern.svg";
import Slide1 from "../../assets/images/slide-2.png";

const SideCarousel = () => {
  return (
    <div className="w-full h-full bg-gradient-to-tr from-[#2f34a8] to-[#444ce4] overflow-hidden hidden md:block">
      <div
        id="carousel-texture"
        className="w-full h-full flex justify-center items-center p-[1rem]"
      >
        <img
          className="max-w-[400px] w-full rounded-sm"
          src={Slide1}
          alt="image"
        />
        <Pattern className="w-[1200px] opacity-10 absolute bottom-[-40rem] left-[-50rem]" />
        <Pattern className="w-[1200px] opacity-10 absolute top-[-35rem] right-[-30rem]" />
      </div>
    </div>
  );
};

export default SideCarousel;
