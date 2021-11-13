import react from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

export const NextArrow = (props) => {
  return (
    <>
      <div
        className="text-white"
        style={{
          ...props.style,
          backgroundColor: "black",
          opacity: "0.5",
          fontSize: "30px",
          display: "block",
          position: "absolute",
          zIndex: "5",
          height: "32px",
          width: "40px",
          right: "-2px",
          top: "140px",
          borderRadius: "4px",
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

export const PrevArrow = (props) => {
  return (
    <>
      <div
        className="text-white "
        style={{
          ...props.style,
          backgroundColor: "black",
          opacity: "0.5",
          fontSize: "30px",
          display: "block",
          position: "absolute",
          zIndex: "5",
          height: "32px",
          width: "40px",
          left: "-2px",
          top: "140px",
          borderRadius: "4px",
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
