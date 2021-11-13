import react from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HeroCarousal = () => {
  const settingsLg = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "80px",
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images = [
    "https://in.bmscdn.com/promotions/cms/creatives/1628591224466_fnbgeneric.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1631025243018_basteachersdaycampaign_webshowcase_1240x300.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1631817814419_moviesdontbreathe2_english_webshowcase_1240x300.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1631814448521_freeguy_amazonpay_webshowcase_1240x300.jpg",
    "https://c4.wallpaperflare.com/wallpaper/976/74/465/multiple-display-mountains-snow-nature-wallpaper-preview.jpg",
  ];
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-40 md:h-80 py-3">
              <img src={image} alt="testing" className="w-full h-full " />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLg}>
          {images.map((image) => (
            <div className="w-full h-80 py-2 px-1">
              <img
                src={image}
                alt="testing"
                className="w-full h-full rounded"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};
export default HeroCarousal;
