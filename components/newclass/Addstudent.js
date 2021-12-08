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
      // let {setInfo} = this.props;
      let {inputs} = this.state;
        return <>
           <div>
        Add student here <br/>
        {inputs.map((inp, i) =>(
          <>
            <Inputs key={i} inps={inp} i={i} addStud={this.setInfo}/>
          </> 
        ))}

        {/* <input name="firstname" value={firstname} onChange={setInfo} placeholder="firstname"/>
        <input name="lastname" value={lastname} onChange={setInfo} placeholder="lastname"/>
        <input name="dept" value={dept} onChange={setInfo} placeholder="dept"/>
        <input name="school" value={school} onChange={setInfo} placeholder="school"/> */}

        
        <button onClick={this.addStudent}>add student</button>
      </div>
      </>
    }
}
 
export default AddStudent;