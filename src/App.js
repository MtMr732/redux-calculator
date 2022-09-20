import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "./components/Button";
import Result from "./components/Result";
import "./App.scss";
import {
  selectValue,
  plus,
  minus,
  multiply,
  divide,
  clear,
  equal,
} from "./features/CalculatorSlice";

const App = () => {
  const dispath = useDispatch();
  return (
    <React.Fragment>
      <div className="result">
        <Result />
      </div>
      <div className="button-wrapper">
        <div className="number">
          <div className="upper">
            <Button text={"7"} onClick={() => dispath(selectValue(7))} />
            <Button text={"8"} onClick={() => dispath(selectValue(8))} />
            <Button text={"9"} onClick={() => dispath(selectValue(9))} />
          </div>
          <div className="middle">
            <Button text={"4"} onClick={() => dispath(selectValue(4))} />
            <Button text={"5"} onClick={() => dispath(selectValue(5))} />
            <Button text={"6"} onClick={() => dispath(selectValue(6))} />
          </div>
          <div className="lower">
            <Button text={"1"} onClick={() => dispath(selectValue(1))} />
            <Button text={"2"} onClick={() => dispath(selectValue(2))} />
            <Button text={"3"} onClick={() => dispath(selectValue(3))} />
          </div>
          <div className="bottom">
            <Button text={"0"} onClick={() => dispath(selectValue(0))} />
            <Button text={"AC"} onClick={() => dispath(clear())} />
            <Button text={"="} onClick={() => dispath(equal())} />
          </div>
        </div>
        <div className="operator">
          <Button text={"÷"} onClick={() => dispath(divide())} />
          <Button text={"×"} onClick={() => dispath(multiply())} />
          <Button text={"-"} onClick={() => dispath(minus())} />
          <Button text={"+"} onClick={() => dispath(plus())} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
