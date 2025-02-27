import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [total, setTotal] = useState(0);
  const [operator, setOperator] = useState(null);
  const [prevInput, setPrevInput] = useState("");

  function handleInput(str) {
    setInput((input) => input + str);
  }

  function handleOperator(op) {
    if (input === "") return;
    setOperator(op);
    setPrevInput(input);
    setInput("");
  }

  function handleEquals() {
    if (operator && prevInput && input) {
      let result;
      const prev = parseFloat(prevInput);
      const current = parseFloat(input);

      switch (operator) {
        case "+":
          result = prev + current;
          break;
        case "-":
          result = prev - current;
          break;
        case "*":
          result = prev * current;
          break;
        case "/":
          result = prev / current;
          break;
        default:
          return;
      }

      setTotal(result);
      setInput(result.toString());
      setOperator(null);
      setPrevInput("");
    }
  }

  function handleClear() {
    setInput("");
    setTotal(0);
    setOperator(null);
    setPrevInput("");
  }

  return (
    <div className="container">
      <div>
        <input
          style={{ width: "100%" }}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          readOnly
        />
        {prevInput ? prevInput : null}
        <input style={{ width: "100%" }} type="text" value={total} readOnly />
      </div>
      <div className="">
        <div className="buttons">
          <Button value="1" onClick={() => handleInput("1")} />
          <Button value="2" onClick={() => handleInput("2")} />
          <Button value="3" onClick={() => handleInput("3")} />
        </div>
        <div className="buttons">
          <Button value="4" onClick={() => handleInput("4")} />
          <Button value="5" onClick={() => handleInput("5")} />
          <Button value="6" onClick={() => handleInput("6")} />
        </div>
        <div className="buttons">
          <Button value="7" onClick={() => handleInput("7")} />
          <Button value="8" onClick={() => handleInput("8")} />
          <Button value="9" onClick={() => handleInput("9")} />
        </div>
        <div className="buttons">
          <Button value="+" onClick={() => handleOperator("+")} />
          <Button value="-" onClick={() => handleOperator("-")} />
          <Button value="*" onClick={() => handleOperator("*")} />
          <Button value="/" onClick={() => handleOperator("/")} />
          <Button value="=" onClick={handleEquals} />
          <Button value="C" onClick={handleClear} />
        </div>
      </div>
    </div>
  );
}

function Button({ value, onClick }) {
  return <button onClick={onClick}>{value}</button>;
}

export default Calculator;
