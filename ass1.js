import React, { Component } from 'react';


class MyAssignment extends Component {

    state = { myName: ["Joshua", "kayode", "Adekunle"] };

    myFunction=()=>{
        let {myName} = this.state;
        myName= [...myName, document.getElementById("DisplayName").value];
        this.setState({myName});
             { myName.map((val, i) => (<div>My name is {val}</div>))} 
             alert("My name is"))
    }

    delStd=()=>{
        let {myName} = this.state;
        this.state= [""];
    }

    myEdit=()=>{
        let {myName} = this.state;

    }


    render() { 
        return <div>
           <input id='DisplayName'  style={{height: 50, width: 300 }}/>
           <button onClick={this.myFunction} > Include Name </button>
             { this.state.myName.map((val, i) => (
              <><div>My name is {val} </div> <h1>"My name is" {val} </h1> 
              <button onClick={this.delStd}>Delete</button>
              <button onClick={this.myEdit}>Edit</button> </>) )} 
        </div>
    }
}
 
export default MyAssignment;