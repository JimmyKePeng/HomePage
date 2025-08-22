import { useState, useEffect } from "react";
import Button from "./Button";
import Sign from "./Sign";
import "./Calculator.css";
export default function Calculator() {
  const [display, setDisplay] = useState(0);
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState("0");
  const [isFirst, setIsFirst] = useState(true);
  const [sign, setSign] = useState(null);
  const numberButtons = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["0", ".", "C"],
  ];
  const operatorButtons = ["+", "-", "*", "/"];

  function handleClick(value) {
    switch (value) {
      case "C":
        reset();
        return;
      case "+":
      case "-":
      case "*":
      case "/":
        setSign(value);
        setDisplay(value);
        setIsFirst(false);
        break;
      case "=":
        let ans;
        if (sign === "+") ans = Number(num1) + Number(num2);
        else if (sign === "-") ans = Number(num1) - Number(num2);
        else if (sign === "*") ans = Number(num1) * Number(num2);
        else if (sign === "/") ans = Number(num1) / Number(num2);
        setDisplay(ans);
        setNum1(ans);
        setNum2("0");
        setSign("=");
        setIsFirst(false);
        break;

      default:
        let newValue = value;
        if (isFirst) {
          if (num1 !== "0") {
            newValue = num1 + value;
          }
          // setNum1(newValue);
          setNum1((prev) => (prev === "0" ? value : prev + value));
        } else {
          if (num2 !== "0") {
            newValue = num2 + value;
          }
          // setNum2(newValue);
          setNum2((prev) => (prev === "0" ? value : prev + value));
        }
        setDisplay(newValue);
    }
  }

  function reset() {
    setNum1("0");
    setNum2("0");
    setDisplay(0);
    setIsFirst(true);
    setSign(null);
  }

  // const keys = [
  //   "0",
  //   "1",
  //   "2",
  //   "3",
  //   "4",
  //   "5",
  //   "6",
  //   "7",
  //   "8",
  //   "9",
  //   ".",
  //   "+",
  //   "-",
  //   "/",
  //   "*",
  // ];

  // function handleKeydown(event) {
  //   const key = event.key;
  //   if (keys.includes(key)) {
  //     handleClick(key);
  //   } else if (key === "Enter") {
  //     handleClick("=");
  //   } else if (key === "Backspace") {
  //     handleClick("C");
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeydown);
  //   return () => window.removeEventListener("keydown", handleKeydown);
  // }, []);

  return (
    <div className="calculator-div">
      <div className="main">
        <div className="display">{display}</div>
        <div className="operators">
          {operatorButtons.map((item, index) => (
            <Sign value={item} key={index} click={handleClick} />
          ))}
        </div>
        <div className="numbers">
          {numberButtons.flat().map((item, index) => (
            <Button value={item} key={index} click={handleClick} />
          ))}
        </div>
        <div className="equal">
          <button
            className="equal-btn"
            value="="
            onClick={(e) => handleClick(e.target.value)}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
