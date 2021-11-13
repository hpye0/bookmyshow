import react from "react";
import { BsChevronRight, BsHeartFill } from "react-icons/bs";
const MovieHero = () => {
  return (
    <>
      <div className=" md:hidden">
        <img
          src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
          alt="poster"
          className=" rounded-xl"
        />
      </div>
      <div className="hidden md:block lg:hidden">
        <img
          src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
          alt="poster"
          className="rounded-xl"
        />
      </div>
      <div
        className="hidden relative lg:block mx-auto"
        style={{ height: "35rem" }}
      >
        <div
          className=" absolute h-full w-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
          }}
        />
        <div
          className="absolute z-30 w-auto top-10 left-12"
          style={{ height: "30rem" }}
        >
          <img
            src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
            alt="poster"
            className="h-full w-full rounded-xl  "
          />
        </div>
        <div className="absolute z-40 text-white mx-96 mt-12 ">
          <h1 className="font-bold text-4xl">
            Shang-Chi and the Legend of
            <br /> the Ten Rings
          </h1>
        </div>
        <div className="gap-3 ">
          <div className="z-30 absolute flex items-centre mx-96 mt-40">
            <button className=" text-red-500 text-2xl rounded px-3 py-1">
              <div className="flex items-center gap-3 justify-items-start">
                <div>
                  <BsHeartFill />
                </div>

                <div>
                  <h1 className="text-white font-bold text-2xl">91%</h1>
                </div>
                <div>
                  <p className="text-xl text-white">4.6k ratings</p>
                </div>
              </div>
            </button>
          </div>
          <div className="absolute mx-96 mt-52 z-30">
            <div>
              <button className="text-white font-bold bg-gray-800 rounded-xl py-4 px-2 text-xl ">
                Add your ratings & reviews
                <button className="bg-white text-black text-xl px-2 py-2 mx-3 font-semibold rounded-md ">
                  Rate now
                </button>
              </button>
            </div>
          </div>
          <div className="absolute mx-96 mt-80 bg-white rounded text-lg px-2 py-1 font-semibold z-30">
            <span>2D, 3D, IMAX, 4DX, MX4D</span>
          </div>
          <div className="absolute mx-96 mt-96 bg-white rounded text-lg px-2 py-1 font-semibold z-30">
            <div>
              <span>English, Tamil, Telugu, Malayalam, Hindi</span>
            </div>
            <div className="absolute  text-white  rounded text-lg  py-2 font-semibold z-30">
              <span>2h 12m • Action, Adventure, Fantasy •</span>
            </div>
            <div className="absolute py-10 ">
              <button className="bg-redpinkbutton-300 text-white text-lg font-semibold rounded-lg px-14 py-3">
                Book Tickets
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
          alt="poster"
          className="w-full h-full items-center"
          style={{}}
        />
      </div>
    </>
  );
};
export default MovieHero;
