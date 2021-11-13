import react from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

export const NextArrowRoundPremiere = (props) => {
  return (
    <>
      <div
        className="text-white"
        style={{
          ...props.style,
          backgroundColor: "grey",
          opacity: "0.9",
          fontSize: "30px",
          display: "block",
          position: "absolute",
          zIndex: "5",
          height: "32px",
          width: "32px",
          right: "-2px",
          top: "35%",
          borderRadius: "50px",
        }}
        onClick={props.onClick}
      >
        <span className="flex items-center justify-items-center">
          <VscChevronRight />
        </span>
      </div>
    </>
  );
};

export const PrevArrowRoundPremiere = (props) => {
  return (
    <>
      <div
        className="text-white "
        style={{
          ...props.style,
          backgroundColor: "grey",
          opacity: "0.9",
          fontSize: "30px",
          display: "block",
          position: "absolute",
          zIndex: "5",
          height: "32px",
          width: "32px",
          left: "12px",
          top: "35%",
          borderRadius: "50px",
        }}
        onClick={props.onClick}
      >
        <span className="">
          <VscChevronLeft />
        </span>
      </div>
    </>
  );
};
