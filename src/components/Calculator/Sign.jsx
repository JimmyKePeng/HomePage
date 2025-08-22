import "./Calculator.css";
export default function Sign({ value, click }) {
  return (
    <button className="calculator-sign-btn" onClick={() => click(value)}>
      {value}
    </button>
  );
}
