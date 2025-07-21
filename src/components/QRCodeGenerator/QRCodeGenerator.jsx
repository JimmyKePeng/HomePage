// npm i react-qr-code
import QRCode from "react-qr-code";
import { useState } from "react";
import "./style.css";
function QRCodeGenerator() {
  const myWebURL = "https://kegangpeng.vercel.app/";
  const [QRCodeValue, setQRCodeValue] = useState(myWebURL);
  const [userInput, setUserInput] = useState("");
  function generateNewQRCode(e) {
    setQRCodeValue(userInput);
    setUserInput("");
    e.preventDefault();
  }

  return (
    <div className="QRCode-div">
      <h2 className="heading">QR Code Generator</h2>
      <form onSubmit={generateNewQRCode} className="QRCode-form">
        <input
          type="text"
          value={userInput}
          placeholder="Enter your value here"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <button
          className="QRCode-btn"
          type="submit"
          disabled={userInput && userInput.trim !== "" ? false : true}
        >
          Generate
        </button>
      </form>
      <QRCode value={QRCodeValue} size={350} />
    </div>
  );
}
export default QRCodeGenerator;
