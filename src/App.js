import React from "react";
import { connect } from "react-redux";
import { 
  onNumberClick,
  onPlusClick,
  onMinusClick,
  onMultiplyClick,
  onDivideClick,
  onClearClick,
} from "./redux/actions";
import {Button} from "./components/Button";
import Result from "./components/Result";
import './App.scss'


const App = (props) =>{
  const {
    calculator,
    onNumberClick,
    onPlusClick,
    onMinusClick,
    onMultiplyClick,
    onDivideClick,
    onClearClick,
  } = props;
  return (
    <React.Fragment>
      <div className="result">
        <Result result={calculator}/>
      </div>
      <div className="button-wrapper">
        <div className="number">
          <div className="upper">
            <Button text={'7'} />
            <Button text={'8'} />
            <Button text={'9'} />
          </div>
          <div className="middle">
            <Button text={'4'} />
            <Button text={'5'} />
            <Button text={'6'} />
          </div>
          <div className="lower">
            <Button text={'1'} />
            <Button text={'2'} />
            <Button text={'3'} />
          </div>
          <div className="bottom">
            <Button text={'0'} />
            <Button text={'AC'} />
            <Button text={'='} />
          </div>
        </div>
        <div className="operator">
            <Button text ={'÷'} />
            <Button text ={'×'} />
            <Button text ={'-'} />
            <Button text ={'+'} />
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) =>{
  return {
    calculator: state.calculator,
  }
}

export default connect(mapStateToProps,{
  onNumberClick,
  onPlusClick,
  onMinusClick,
  onMultiplyClick,
  onDivideClick,
  onClearClick,
})(App);
