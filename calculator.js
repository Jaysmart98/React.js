import React, { Component } from 'react';

class Calculator extends React.Component {
    state = {num: ""};

    setVal=val=>{
        let {num} = this.state;
        num+=val;
        // num= num+val;
        this.setState({num})
    }
    calc=val=>{
        let {num} = this.state;
        num = eval(num);
        this.setState({num});
    }

    render() { 
        return <div>
            <input value={this.state.num}/>
            <button onClick={()=> this.setVal(0)}>0</button>
            <button onClick={()=> this.setVal(1)}>1</button>
            <button onClick={()=> this.setVal(2)}>2</button>
            <button onClick={()=> this.setVal(3)}>3</button>
            <button onClick={()=> this.setVal(4)}>4</button>
            <button onClick={()=> this.setVal(5)}>5</button>
            <button onClick={()=> this.setVal(6)}>6</button>
            <button onClick={()=> this.setVal(7)}>7</button>
            <button onClick={()=> this.setVal(8)}>8</button>
            <button onClick={()=> this.setVal(9)}>9</button>
            <button onClick={()=> this.setVal("+")}>+</button>
            <button onClick={()=> this.setVal("-")}>-</button>
            <button onClick={()=> this.setVal("/")}>/</button>
            <button onClick={()=> this.setVal("*")}>*</button>
            <button onClick={this.calc}>=</button>
        </div>;
    }
}
 
export default Calculator;