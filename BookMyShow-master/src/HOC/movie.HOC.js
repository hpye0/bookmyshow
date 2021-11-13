// higher order components
// transform component into another component
// adding additional functional components to existing components

import react from "react";
import { Route } from "react-router-dom";
import MovieLayout from "../layouts/movie.layout";

const MovieHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <MovieLayout>
            <Component {...props} />
          </MovieLayout>
        )}
      />
    </>
  );
};
export default MovieHOC;
