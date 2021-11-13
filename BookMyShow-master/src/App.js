import { Route } from "react-router-dom";
import DefaultHOC from "./HOC/Default.HOC";
import HomePage from "./pages/Home.page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieHOC from "./HOC/movie.HOC";
import Movie from "./pages/movies.pages";
import Plays from "./pages/plays.pages";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
      <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}

export default App;
