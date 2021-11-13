import react from "react";
import Slider from "react-slick";
import { NextArrowRound, PrevArrowRound } from "./CastArrows.Round.component";
const CastCard = (props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-full h-30  px-2 lg:px-6">
          <img
            className="w-full h-full rounded-full"
            src={props.src}
            alt="Cast Image"
          />
        </div>
        <h3 className="text-xl font-semibold px-16 ">Dom</h3>
        <h5 className=" text-lg font-medium"> For the Family</h5>
      </div>
    </>
  );
};

const CastCardSlider = () => {
  const CastImage = [
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/vin-diesel-5007-22-12-2017-10-17-23.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/john-cena-1021-24-03-2017-15-43-30.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/tyrese-gibson-2671-24-03-2017-17-39-25.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/charlize-theron-410-21-05-2019-04-42-50.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/nathalie-emmanuel-1055032-24-03-2017-16-16-15.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/michelle-rodriguez-1471-13-10-2017-03-57-20.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/helen-mirren-808-24-03-2017-12-36-16.jpg",
  ];
  const settings = {
    autoplay: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
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
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
        },
      },
    ],
    nextArrow: <NextArrowRound />,
    prevArrow: <PrevArrowRound />,
  };
  return (
    <>
      <Slider {...settings}>
        {CastImage.map((image) => (
          <CastCard src={image} />
        ))}
      </Slider>
    </>
  );
};

export default CastCardSlider;
