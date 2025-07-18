import { useEffect, useState, useRef } from "react";
import "./style.css";
// function StopWatch() {
//   const [h, setH] = useState(0);
//   const [m, setM] = useState(59);
//   const [s, setS] = useState(58);
//   const [cs, setCs] = useState(0);
//   const [start, setStart] = useState(false);

//   function increaseTime() {
//     if (m === 60) {
//       setH((prev) => prev + 1);
//       setM(0);
//     }
//     if (cs === 99) setS((prev) => prev + 1);
//     if (s === 60) {
//       setM((prev) => prev + 1);
//       setS(0);
//     }
//     setCs((prev) => (prev === 99 ? 0 : prev + 1));
//   }

//   useEffect(() => {
//     if (start) setTimeout(increaseTime, 10);
//   }, [start, cs]);

//   function reset() {
//     setCs(0);
//     setS(0);
//     setM(0);
//     setH(0);
//     setStart(false);
//   }

//   return (
//     <div className="stopwatch-container">
//       <div className="clock">
//         <div className="time">
//           {h ? <h1>{h}</h1> : null}
//           {h ? <h1>:</h1> : null}
//           {m === 0 ? <h1>00</h1> : m < 10 ? <h1>0{m}</h1> : <h1>{m}</h1>}
//           <h1>:</h1>
//           {s === 0 ? <h1>00</h1> : s < 10 ? <h1>0{s}</h1> : <h1>{s}</h1>}
//           <h1>:</h1>
//           {cs === 0 ? <h1>00</h1> : cs < 10 ? <h1>0{cs}</h1> : <h1>{cs}</h1>}
//         </div>
//         <div className="buttons">
//           <button className="start" onClick={() => setStart(true)}>
//             Start
//           </button>
//           <button className="stop" onClick={() => setStart(false)}>
//             Stop
//           </button>
//           <button className="reset" onClick={reset}>
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

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
