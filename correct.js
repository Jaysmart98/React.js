import React, { Component } from 'react';
    

class AAsignment extends React.Component {
   state = { students: [], name: "", dept: "", School: ""};

   setInfo=e=>{
      this.setState({[e.target.name]: e.target.value});
   }
    createStudent=()=>{
      let {name, dept, school, students} = this.state;
      this.setState({students: [...students, {name, dept, school}]})
    }

    DelStudent=()=>{
      let {students} = this.state;
      this.setState({students: students.filter((_, i)=>i!==i)});
    }

  render() { 
    let {students} = this.state

    return  <div>
     <input onClick={this.setInfo} name="name" placeholder="Name"></input>
     <input  onClick={this.setInfo} name="name" placeholder="Department"></input>
     <input  onClick={this.setInfo} name="name" placeholder="School"></input>

     <button onClick={this.createStudent}>Click Me</button>
    
     {students.map((student, i)=>(
     <div key={i}>
     <h2>student {i+1}</h2> 
     name: {student.name}
     Department: {student.dept}
     School: {student.school}
     <button onClick={()=>this.DelStudent(i)}>Delete Student</button> 
    </div>
     ))}
     </div>
  }
}
 
export default AAsignment;