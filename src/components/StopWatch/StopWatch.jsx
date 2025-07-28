import { useEffect, useState, useRef } from "react";
import "./style.css";

function StopWatch() {
  const [time, setTime] = useState(0); // in ms
  const [running, setRunning] = useState(false);
  const startRef = useRef(null);

  useEffect(() => {
    let interval;
    if (running) {
      startRef.current = Date.now() - time;
      interval = setInterval(() => {
        setTime(Date.now() - startRef.current);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [running]);

  // useEffect(() => {
  //   let interval;
  //   if (running) {
  //     startRef.current = Date.now() - time;
  //     interval = setInterval(() => setTime(Date.now() - startRef.current), 10);
  //   }
  //   return clearInterval(interval);
  // }, [running]);

  function format() {
    let min = Math.floor((time / 1000 / 60) % 60);
    let s = Math.floor((time / 1000) % 60);
    let ms = Math.floor((time / 10) % 100);
    min < 10 ? (min = `0${min}`) : min;
    s < 10 ? (s = `0${s}`) : s;
    ms < 10 ? (ms = `0${ms}`) : ms;
    return `${min}:${s}:${ms}`;
  }
  return (
    <div className="stopwatch-container">
      <h1>Stop Watch</h1>
      <div className="clock">
        <div className="time">
          <h1>{format()}</h1>
        </div>
        <div className="buttons">
          <button className="start" onClick={() => setRunning(true)}>
            Start
          </button>
          <button className="stop" onClick={() => setRunning(false)}>
            Stop
          </button>
          <button
            className="reset"
            onClick={() => {
              setTime(0);
              setRunning(false);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
