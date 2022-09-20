import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: 0,
  operator: "",
  resultValue: 0,
  calculate: false,
  showResult: "",
};

export const CalculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    selectValue: (state, action) => {
      return {
        ...state,
        inputValue: state.inputValue * 10 + action.payload,
        showResult: false,
      };
    },
    plus: (state) => {
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: "+",
          resultValue: state.resultValue + state.inputValue,
          showResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: "+",
          calculate: true,
          resultValue: state.resultValue + state.inputValue,
          showResult: false,
        };
      }
    },
    minus: (state) => {
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: "-",
          resultValue: state.resultValue - state.inputValue,
          showResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: "-",
          calculate: true,
          resultValue: state.resultValue - state.inputValue,
          showResult: false,
        };
      }
    },
    multiply: (state) => {
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: "*",
          resultValue: state.resultValue * state.inputValue,
          showResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: "*",
          calculate: true,
          resultValue: state.resultValue * state.inputValue,
          showResult: false,
        };
      }
    },
    divide: (state) => {
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: "/",
          resultValue: state.resultValue / state.inputValue,
          showResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: "/",
          calculate: true,
          resultValue: state.resultValue / state.inputValue,
          showResult: false,
        };
      }
    },
    clear: () => {
      return {
        inputValue: 0,
        operator: "",
        calculate: false,
        resultValue: "",
        showResult: false,
      };
    },
    equal: (state) => {
      switch (state.operator) {
        case "+":
          return {
            inputValue: state.resultValue + state.inputValue,
            operator: "",
            calculate: false,
            resultValue: state.resultValue + state.inputValue,
            showResult: true,
          };
        case "-":
          return {
            inputValue: state.resultValue - state.inputValue,
            operator: "",
            calculate: false,
            resultValue: state.resultValue - state.inputValue,
            showResult: true,
          };
        case "*":
          return {
            inputValue: state.resultValue * state.inputValue,
            operator: "",
            calculate: false,
            resultValue: state.resultValue * state.inputValue,
            showResult: true,
          };
        case "/":
          return {
            inputValue: state.resultValue / state.inputValue,
            operator: "",
            calculate: false,
            resultValue: state.resultValue / state.inputValue,
            showResult: true,
          };
        default:
          return {
            state,
          };
      }
    },
  },
});

export const { selectValue, plus, minus, multiply, divide, clear, equal } =
  CalculatorSlice.actions;

export default CalculatorSlice;
