import react from "react";
import Poster from "../poster/poster.component";
import settings from "../../config/postercarousal.config";
import Slider from "react-slick";

const PosterSlider = (props) => {
  return (
    <>
      <div className="flex flex-col items-start px-9">
        <h1
          className={`text-2xl font-bold  py-2 ${
            props.isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {props.title}
        </h1>
        <p className={` ${props.isDark ? "text-white" : "text-gray-800"}`}>
          {props.subtitle}
        </p>
      </div>
      <Slider {...settings}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
    </>
  );
};
export default PosterSlider;
