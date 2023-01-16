import { Fragment, JSXElementConstructor } from "react";
import "./HangmanDrawing.css";

const HEAD = () => {
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />;
};

const BODY = () => {
  <div
    style={{
      width: "50px",
      height: "50px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: "0px",
    }}
  />;
};

const RIGHT_ARM = () => {
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "30deg",
      transformOrigin: "left bottom",
    }}
  />;
};

const LEFT_ARM = () => {
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />;
};

export function HangmanDrawing() {
  return (
    <div className="Drawing">
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      <div className="Part1" />
      <div className="part2" />
      <div className="part3" />
    </div>
  );
}
