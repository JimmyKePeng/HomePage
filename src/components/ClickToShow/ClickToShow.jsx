import React, { useContext, useState, useEffect } from "react";
import QRCodeGenerator from "../QRCodeGenerator/QRCodeGenerator";
import GithubProfileFinder from "../GithubProfileFinder/GithubProfileFinder";
import TicTacToe from "../TicTacToe/TicTacToe";
import StopWatch from "../StopWatch/StopWatch";
import WeatherApp from "../WeatherApp/WeatherApp";
import { IoArrowDownCircle } from "react-icons/io5";
import "./style.css";

export default function ClickToShow() {
  const components = [
    { key: "WeatherApp", component: <WeatherApp /> },
    { key: "StopWatch", component: <StopWatch /> },
    { key: "TicTacToe", component: <TicTacToe /> },
    { key: "GithubProfileFinder", component: <GithubProfileFinder /> },
    { key: "QRCodeGenerator", component: <QRCodeGenerator /> },
  ];

  const [showing, setShowing] = useState();
  const [arrowBounce, setArrowBounce] = useState(true);
  return (
    <div className="ClickToShow-div">
      <div className="btn-div">
        {components.map((item, index) => (
          <button
            className="show-buttons"
            key={index}
            onClick={() => {
              setShowing(item);
              setArrowBounce(false);
            }}
          >
            {item.key}
          </button>
        ))}
        <button
          className="show-buttons"
          onClick={() => {
            setShowing(null);
            setArrowBounce(true);
          }}
        >
          clear
        </button>
      </div>
      <div className="showing-div">{showing && showing.component}</div>
      <div className="floor-web">
        <IoArrowDownCircle
          className={`down-arrow ${arrowBounce ? "bounce" : ""}`}
        />
        <a href="https://minghardwoodfloor.com">My Floor Website</a>
      </div>
    </div>
  );
}
