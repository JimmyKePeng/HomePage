import "./Calculator.css";
export default function Button({ value, click }) {
  return (
    <button className="calculator-btn" onClick={() => click(value)}>
      {value}
    </button>
  );
}
