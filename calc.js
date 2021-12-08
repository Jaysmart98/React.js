import React from 'react';

class Calc extends React.Component {
  display = (e) => {
    document.getElementById("ip2").value +=e
    alert("hii");
    console.log("hii");
  }

  calculate = (e) => {
    var p = document.getElementById("ip2").value;
    var q = eval(p);
    document.getElementById("ip2").value = q;
    }
    
     Answer = (e)=> {
        var p = document.getElementById("ip2").value;
        document.getElementById("ip2").value = p;
        }
    

  render() { 

    return <div> 
      <input style={{width: 200, height:40}} disabled id="ip2"/>
      <br></br>

      <button style={{width: 50, height:40}} onClick={() => this.display('1')}>1</button>
      <button style={{width: 50, height:40}} onClick={() => this.display('2')}>2</button>
      <button style={{width: 50, height:40}} onClick={() => this.display('3')}>3</button>
      <button style={{width: 50, height:40}} onClick={() => this.display('4')}>4</button>
      <br></br>
      <button style={{width: 50, height:40}} onClick={() => this.display('5')}>5</button>
      <button style={{width: 50, height:40}} onClick={() => this.display('6')}>6</button>
      <button style={{width: 50, height:40}} onClick={() => this.display('7')}>7</button>
      <button style={{width: 50, height:40}} onClick={() => this.display('8')}>8</button>
      <br></br>
      <button style={{width: 50, height:40}} onClick={() => this.display('9')}>9</button>
      <button style={{width: 50, height:40}} onClick={() => this.display('0')}>0</button>
      <button style={{width: 50, height:40}} onClick={() => this.display('+')}>+</button>
      <button style={{width: 50, height:40}} onClick={() => this.display('-')}>-</button>
      <br></br>
      <button style={{width: 50, height:40}} onClick={() => this.display('/')}>/</button>
      <button style={{width: 50, height:40}} onClick={() => this.display('(')}>(</button>
      <button style={{width: 50, height:40}} onClick={() => this.display(')')}>)</button>
      <button style={{width: 50, height:40}} onClick={() => this.answer('=')}>=</button>

    </div>
  }
}
 
export default Calc;