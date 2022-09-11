import { 
  INPUT_NUMBER,
  PLUS,
  MINUS,
  MULTIPLY,
  DIVIDE,
  EQUAL,
  CLEAR 
}from "../actions/types";

const initialAppState = {
  inputValue:0,
  operator:'',
  resultValue:0,
  calculate:false,
  showResult:'',
}

const calculator = ( state=initialAppState,action) => {
  switch(action.type){
    case INPUT_NUMBER:
      return {
        ...state,
        inputValue: state.inputValue * 10 + action.number,
        showResult:false,
      };
    case PLUS:
      if(state.calculate === true){
        return{
          ...state,
          inputValue:0,
          operator:'+',
          resultValue:state.resultValue + state.inputValue,
          showResult:true,
        };
      }else{
        return{
          ...state,
          inputValue:0,
          operator:'+',
          calculate:true,
          resultValue:state.resultValue + state.inputValue,
          showResult:false,
        };
      }
    case  MINUS:
      if(state.calculate === true){
        return{
          ...state,
          inputValue:0,
          operator:'-',
          resultValue:state.resultValue - state.inputValue,
          showResult:true,
        };
      }else{
        return{
          ...state,
          inputValue:0,
          operator:'-',
          calculate:true,
          resultValue:state.resultValue - state.inputValue,
          showResult:false,
        };
      }
    case MULTIPLY:
      if(state.calculate === true){
        return{
          ...state,
          inputValue:0,
          operator:'*',
          resultValue:state.resultValue * state.inputValue,
          showResult:true,
        };
      }else{
        return{
          ...state,
          inputValue:0,
          operator:'*',
          calculate:true,
          resultValue:state.resultValue * state.inputValue,
          showResult:false,
        };
      }
      case DIVIDE:
        if(state.calculate === true){
          return{
            ...state,
            inputValue:0,
            operator:'/',
            resultValue:state.resultValue / state.inputValue,
            showResult:true,
          };
        }else{
          return{
            ...state,
            inputValue:0,
            operator:'/',
            calculate:true,
            resultValue:state.resultValue / state.inputValue,
            showResult:false,
          };
        }

      case CLEAR:
        return {
          inputValue:0,
          operator:'',
          calculate:false,
          operator:false,
          showResult:false
        }

      case EQUAL:
        switch (state.operator){
          case '+':
            return{
              inputValue:state.resultValue + state.inputValue,
              operator:'',
              calculate:false,
              resultValue:state.resultValue + state.inputValue,
              showResult:true,
            }
          case '-':
            return{
              inputValue:state.resultValue - state.inputValue,
              operator:'',
              calculate:false,
              resultValue:state.resultValue - state.inputValue,
              showResult:true,
            }
          case '*':
            return{
              inputValue:state.resultValue * state.inputValue,
              operator:'',
              calculate:false,
              resultValue:state.resultValue * state.inputValue,
              showResult:true,
            }
          case '/':
            return{
              inputValue:state.resultValue / state.inputValue,
              operator:'',
              calculate:false,
              resultValue:state.resultValue / state.inputValue,
              showResult:true,
            }
            default:
              return{
                state
              }
          
        }
        default:
          return{
            state
          }
  }
}

export default calculator;
