import React, { Component } from "react";
import Slider from "react-slick";
import Image01 from '../assets/hero-01.jpg';
import Image02 from '../assets/hero-02.jpg';
import Image03 from '../assets/hero-03.jpg';
import Image04 from '../assets/hero-04.jpg';

export default class ReactSlickSliderAutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000, // Transition speed between slides
      autoplaySpeed: 6000, // Total time each image is displayed (6 seconds for each image, plus transition time)
      cssEase: "linear",
      fade: true, // Enable the fade effect
      pauseOnHover: false, // Disable pause on hover
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="slider-item">
              <img src={Image01} alt="Image 1" />
              <div className="slider-text">Text for Image 1</div>
            </div>
          </div>
          <div>
            <div className="slider-item">
              <img src={Image02} alt="Image 2" />
              <div className="slider-text">Text for Image 2</div>
            </div>
          </div>
          {/* <div>
            <div className="slider-item">
              <img src={Image03} alt="Image 3" />
              <div className="slider-text">Text for Image 3</div>
            </div>
          </div>
          <div>
            <div className="slider-item">
              <img src={Image04} alt="Image 4" />
              <div className="slider-text">Text for Image 4</div>
            </div>
          </div> */}
        </Slider>
      </div>
    );
  }
}
