import React, { Component } from 'react';
import Inputs from './Input';

class AddStudent extends Component {
    state = { firstname:"", lastname: "", dept:"", school: "",   inputs:[
      {placeholder:'Firstname', name:'firstname', val:''},
      {placeholder:'Lastname', name:'lastname', val:''},
      {placeholder:'Dept', name:'dept', val:''}, 
      {placeholder:'School', name:'school', val:''} 
    ]
  }

  state = { };

setInfo=(e, i)=>{
  let {inputs} = this.state;
  inputs[i].val = e.target.value;
  this.setState({inputs});
}

addStudent = () =>{
  let {firstname, lastname, dept, school} = this.state;

  this.props.addStd({name: firstname+" "+lastname, dept, school});
  
  this.setState({firstname: "", lastname: "", dept: "", school: ""});
}


    render() { 
      let {inputs} = this.state;

      let {addStud, i} = this.state
      let {placeholder, name, val} = this.state;

        return <>

           <div>

      <input name={name} placeholder={placeholder} value={val} onChange={(event)=>addStud(event, i)}/>
        Add student here <br/>
        {inputs.map((inp, i) =>(
          <>
            <Inputs key={i} inps={inp} i={i} addStud={this.setInfo}/>
          </> 
        ))}

        
        <button onClick={this.addStudent}>add student</button>
      </div>
      </>
    }
}
 
export default AddStudent;