import React, { useState, useEffect } from "react";
import "./Calculator.css"; // Importing the CSS file

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [operator, setOperator] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [lastOperator, setLastOperator] = useState("");
  const [result, setResult] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const numClick = (num) => {
    if (result === 0) {
      setResult(num);
    } else {
      setResult(prevResult => prevResult + num);
    }
  };

  const plusClick = () => {
    if (operator === "+") {
      setCurrentValue(parseFloat(currentValue) + parseFloat(result));
    } else {
      setCurrentValue(result);
      setResult(0);
    }
    setOperator("+");
  };

  const subClick = () => {
    if (operator === "-") {
      setCurrentValue(parseFloat(currentValue) - parseFloat(result));
    } else {
      setCurrentValue(result);
      setResult(0);
    }
    setOperator("-");
  };

  const calClick = () => {
    let newValue = result;
    if (operator === "+") {
      setResult(parseFloat(currentValue) + parseFloat(newValue));
      setPreviousValue(newValue);
      setLastOperator("+");
    } else if (operator === "-") {
      setResult(parseFloat(currentValue) - parseFloat(newValue));
      setPreviousValue(newValue);
      setLastOperator("-");
    }
    setOperator("");
  };

  const clearInfo = () => {
    setResult(0);
  };

  const clearAll = () => {
    setResult(0);
    setCurrentValue("");
    setOperator("");
    setPreviousValue("");
    setLastOperator("");
  };

  return (
    <div id="container">
      <div>
        <b>Counter:</b> <span id="counter">{counter}</span>
      </div>
      <hr />
      <table className="cal-model">
        <tbody>
          <tr>
            <td colSpan="4">
              <input type="number" value={result} className="result" disabled />
            </td>
          </tr>
          <tr>
            <td><button className="grey" onClick={clearInfo}>C</button></td>
            <td><button className="grey" onClick={clearAll}>CA</button></td>
            <td><button className="grey">%</button></td>
            <td><button className="orange">/</button></td>
          </tr>
          <tr>
            <td><button className="dark-grey" onClick={() => numClick(7)}>7</button></td>
            <td><button className="dark-grey" onClick={() => numClick(8)}>8</button></td>
            <td><button className="dark-grey" onClick={() => numClick(9)}>9</button></td>
            <td><button className="orange">X</button></td>
          </tr>
          <tr>
            <td><button className="dark-grey" onClick={() => numClick(4)}>4</button></td>
            <td><button className="dark-grey" onClick={() => numClick(5)}>5</button></td>
            <td><button className="dark-grey" onClick={() => numClick(6)}>6</button></td>
            <td><button className="orange" onClick={subClick}>-</button></td>
          </tr>
          <tr>
            <td><button className="dark-grey" onClick={() => numClick(1)}>1</button></td>
            <td><button className="dark-grey" onClick={() => numClick(2)}>2</button></td>
            <td><button className="dark-grey" onClick={() => numClick(3)}>3</button></td>
            <td><button className="orange" onClick={plusClick}>+</button></td>
          </tr>
          <tr>
            <td colSpan="2"><button className="dark-grey" onClick={() => numClick(0)}>0</button></td>
            <td><button className="dark-grey">.</button></td>
            <td><button className="orange" onClick={calClick}>=</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
