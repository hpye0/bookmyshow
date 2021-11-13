import react from "react";
import Slider from "react-slick";
import Poster from "../poster/poster.component";
import settings from "../../config/postercarousal.config";
import PremiereImages from "../../config/temp.posters.config";

export const Premiere = () => {
  return (
    <>
      <div className="flex flex-col items-start px-9">
        <h1 className="text-2xl font-bold text-white py-2">Premieres</h1>
        <p className="text-white">Brand new release every Friday</p>
      </div>
      <Slider {...settings}>
        {PremiereImages.map((image) => (
          <Poster {...image} isDark />
        ))}
      </Slider>
    </>
  );
};
