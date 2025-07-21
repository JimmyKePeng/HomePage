import React, { useContext, useState, useEffect } from "react";
import QRCodeGenerator from "../QRCodeGenerator/QRCodeGenerator";
import GithubProfileFinder from "../GithubProfileFinder/GithubProfileFinder";
import TicTacToe from "../TicTacToe/TicTacToe";
import StopWatch from "../StopWatch/StopWatch";

import "./style.css";
export default function ClickToShow() {
  const components = [
    {
      key: "StopWatch",
      component: <StopWatch />,
    },
    {
      key: "TicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "GithubProfileFinder",
      component: <GithubProfileFinder />,
    },
    {
      key: "QRCodeGenerator",
      component: <QRCodeGenerator />,
    },
  ];

  const [showing, setShowing] = useState(null);

  return (
    <div className="ClickToShow-div">
      <div className="btn-div">
        {components.map((item, index) => (
          <button
            className="show-buttons"
            key={index}
            onClick={() => setShowing(item)}
          >
            {item.key}
          </button>
        ))}
        <button className="show-buttons" onClick={() => setShowing(null)}>
          clear
        </button>
      </div>
      <div className="showing-div">{showing && showing.component}</div>
    </div>
  );
}
