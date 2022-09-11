import {
  INPUT_NUMBER,
  PLUS,
  MINUS,
  MULTIPLY,
  DIVIDE,
  EQUAL,
  CLEAR,
} from './types';

export const onNumberClick = (number) => {
  return{
    type: INPUT_NUMBER,
    number,
  }
};

export const onPlusClick = () => {
  return{
    type: PLUS,
  }
};

export const onMinusClick = () => {
  return{
    type: MINUS,
  }
};

export const onMultiplyClick = () => {
  return {
    type: MULTIPLY,
  }
};

export const onDivideClick = () => {
  return {
    type: DIVIDE,
  }
};

export const onEqualClick = () => {
  return{
    type: EQUAL,
  }
};

export const onClearClick = () => {
  return{
    type: CLEAR,
  }
};