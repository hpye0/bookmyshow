import react from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import { BiMovie } from "react-icons/bi";
import CastCarousal from "../components/CastCarousal/CastCarousal.component";
import CastCardSlider from "../components/CastCarousal/CastCarousal.component";
import CrewCardSlider from "../components/CastCarousal/CrewCarousal.component";

const Movie = () => {
  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:w-2/3 lg:ml-24">
        <div className="flex flex-col gap-3x">
          <h2 className=" font-bold text-2xl">About the movie</h2>
          <p className="font-normal">
            Shang-Chi and The Legend of The Ten Rings features Simu Liu as
            Shang-Chi, who must confront the past he thought he left behind when
            he is drawn into the web of the mysterious Ten Rings organization.
            The film is directed by Destin Daniel Cretton and produced by Kevin
            Feige and Jonathan Schwartz.
          </p>
        </div>
        <div>
          <hr className="my-8" />
        </div>
        <div>
          <h1 className=" font-bold text-2xl pb-2">Applicable Offers</h1>
          <div className="flex items-start gap-2 bg-yellow-50 border-yellow-300 border-dashed rounded-lg border-2 w-96 p-3">
            <BiMovie className="text-2xl" />
            <div className=" flex flex-col items-start">
              <h3 className="text-xl font-medium">Filmy Pass</h3>
              <p className="font-normal text-grey-600">
                Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                Pass @Rs.99
              </p>
            </div>
          </div>
        </div>
        <div>
          <hr className="my-8" />
        </div>
        <div>
          <h2 className="font-bold text-2xl pb-2">Cast</h2>
          <CastCardSlider />
        </div>
        <div>
          <hr className="my-8" />
        </div>
        <div>
          <h2 className="font-bold text-2xl py-3 pb-2">Crew</h2>
          <CrewCardSlider />
        </div>
        <div>
          <hr className="my-8" />
        </div>
      </div>
    </>
  );
};

export default Movie;
