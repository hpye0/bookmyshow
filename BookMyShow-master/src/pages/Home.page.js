import react from "react";
import PosterSlider from "../components/posterslider/posterSlider.component";
import PremiereImages from "../config/temp.posters.config";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import { Premiere } from "../components/Premiere/Premiere.component";
const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-5 pt-2">
          <h1 className="text-2xl font-bold text-grey-300 py-2">
            The Best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>
        <div className="bg-navCol-800 py-8">
          <div className="flex mx-16 sm:w-full ">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="rupay"
              className=""
            />
          </div>
          <div className="container mx-auto px-4">
            <PosterSlider
              images={PremiereImages}
              title="Primieres"
              subtitle="Brand new release every Friday"
              isDark={true}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <PosterSlider
          images={PremiereImages}
          title="Online Streaming Events"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4">
        <PosterSlider
          images={PremiereImages}
          title="Outdoor Events"
          isDark={false}
        />
      </div>
    </>
  );
};
export default HomePage;
