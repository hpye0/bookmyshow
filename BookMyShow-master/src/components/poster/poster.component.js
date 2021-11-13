import react from "react";

const Poster = (props) => {
  return (
    <>
      <div className="flex flex-col items-start gap-2 ml-5 px-3 py-3">
        <div className="h-auto">
          <img
            src={props.src}
            alt={props.title}
            className="rounded-xl w-full h-full"
          />
        </div>
        <h3
          className={`text-xl font-semibold  ${
            props.isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {props.title}
        </h3>
        <p
          className={`text-sm text-grey-300 txtwrap ${
            props.isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {props.subtitle}
        </p>
      </div>
    </>
  );
};

export default Poster;
