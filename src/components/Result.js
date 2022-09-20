import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const result = useSelector((state) => state.calculator.inputValue);
  return <div className="resultValue">{result}</div>;
};

export default Result;
