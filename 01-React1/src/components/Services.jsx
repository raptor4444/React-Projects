import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

const Services = () => {
  return (
    <div className="Services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
        showThumbs={false}
        showIndicators={true} //this is set on default but is shown to know it exists.
      >
        <div>
          <img src={img1} alt="item1" />
          <p>full stack</p>
        </div>
        <div>
          <img src={img2} alt="item2" />
          <p>full stack new</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
