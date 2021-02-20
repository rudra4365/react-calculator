import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';

class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      input : "",
      previousNumber : "",
      currentNumber : "",
      operator : ""
    };
  }

  addZero = val => {
    if(this.state.input !== "")
    {
      this.setState({input: this.state.input + val});
    }
  };

  addDecimal = val => {
    if(this.state.input.indexOf(".") === -1)
    {
      this.setState({input: this.state.input + val});
    }
  };

  clearInput = () => {
    this.setState({input: ""});
  };

  addd = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "plus";
  };

  addToInput = val => {
    this.setState({input: this.state.input + val});
  };

  answer = () => {
    this.state.currentNumber = this.state.value;
    if(this.state.operator === "plus")
    {
      this.setState({input: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber)});
    }
  };

  render(){
  return (
    <div className = "App">
      <div className = "calc-wrapper">
        <div className = "row">
          <Input>{this.state.input}</Input>
        </div>
        <div className = "row">
          <Button handleClick = {this.addToInput}>7</Button>
          <Button handleClick = {this.addToInput}>8</Button>
          <Button handleClick = {this.addToInput}>9</Button>
          <Button>/</Button>
        </div>
        <div className = "row">
          <Button handleClick = {this.addToInput}>4</Button>
          <Button handleClick = {this.addToInput}>5</Button>
          <Button handleClick = {this.addToInput}>6</Button>
          <Button>*</Button>
        </div>
        <div className = "row">
          <Button handleClick = {this.addToInput}>1</Button>
          <Button handleClick = {this.addToInput}>2</Button>
          <Button handleClick = {this.addToInput}>3</Button>
          <Button handleClick = {this.addd}>+</Button>
        </div>
        <div className = "row">
          <Button handleClick = {this.addDecimal}>.</Button>
          <Button handleClick = {this.addZero}>0</Button>
          <Button handleClick = {this.answer}>=</Button>
          <Button>-</Button>
        </div>
        <div className = "row">
          <ClearButton handleClear = {this.clearInput}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
