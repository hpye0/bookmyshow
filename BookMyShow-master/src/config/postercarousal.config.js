import {
  NextArrowRoundPremiere,
  PrevArrowRoundPremiere,
} from "../components/Premiere/arrow.Premiere.component";
const settings = {
  autoplay: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  nextArrow: <NextArrowRoundPremiere />,
  prevArrow: <PrevArrowRoundPremiere />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },

    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
    },
  ],
};

export default settings;
