// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';
// // import ClassRegister from './components/ClassRegister';

// // import Button from './components/Button';

// class App extends React.Component {



//     // state = {num: 5}
//     // handleNum = () => {
//     //   let {num} = this.state;
//     //   num*=2;
//     //   this.setState ({num})
//       // console.log(this.state.num)
//     // }
//     state = {studentInfo:[], fName:"", lName:"", dept:""}
//     // getName(e){
//     //   this.setState ({name:e.tartget.value})
//     // }

  
//     setData = e => {
//       this.setState({[e.target.name]: e.target.value})
//     }


//     addStudent = e => {
//       let {fName, lName, dept, studentInfo} = this.state;
//       e = this.setState({ studentInfo:[...studentInfo, {fName, lName, dept}]})
//       console.log(studentInfo)
//     }

//     // myFunc = val =>{
//     //   alert(val*2)
//     // }
//     delete = del =>{
//       this.setState(del);
//     }
//     hide_show = (id) => {
//       let studentInfo = this.state.studentInfo.slice()
//       studentInfo[id] = !studentInfo[id] 
//       this.setState({studentInfo})
//     }
//     hideOrShow =ind=> {
//       let {studentInfo} =this.state;
//       if(studentInfo[ind].show){
//         studentInfo[ind].show=false;
//       } else {
//         studentInfo[ind].show=true;
//       }
//     }

//     render () {
//       // let {names} = this.state
//       let {studentInfo, fName, lName, dept} = this.state;
//       return (
//         <>
//         <div>
//           <input onChange= {this.setData} value={fName} placeholder='First Name' name='fName'/>  
//           <input onChange= {this.setData} value={lName} placeholder='Last Name' name='lName'/>
//           <input onChange= {this.setData} value={dept} placeholder='Department' name='dept'/>
//           <button onClick={this.addStudent}>Add Student</button>
//           {studentInfo.length > 0? 
//             studentInfo.map(({fName, lName, dept}, i)=>(
              
//               <div key={i}>
//                   <> 
//                     {studentInfo[i]? 
//                       <div>
//                         <b>Student {i+1} </b> <br/> First Name: {fName}  <br/> Last Name: {lName} <br/> Department: {dept}  <br/>
//                         <button onClick={()=>this.delete(studentInfo.splice(i,1))}>Delete</button>
//                         <button onClick={()=>this.hide_show(i)}>Hide</button>
//                       </div>
//                     :  
//                       <>
//                         <b>Student {i+1} </b> <br/> 
//                         <button onClick={()=>this.hide_show(i)}>Show</button>
//                       </>
//                         }
//                   </>
//               </div>
            
//           ))
//           : <div>No Student on the List</div>
//           }
//           {/* I have {this.state.num} students */}

//           {/* <input onKeyUp= {this.setName}/> */}

//           {/* <button onClick={this.handleNum}>change num</button> */}

//           {/* <button onClick={()=>this.myFunc(3)}>Click me</button>
//           <button onClick={()=>this.myFunc(4)}>second</button> */}
//         </div>


//         {/* <ClassRegister/> */}

//         </>
//       )
//     }
//   }



// export default App;














// import React, { Component } from 'react';
// import AddStudent from './components/newclass/Addstudent';
// import DisplayStudent from './components/newclass/Displaystudent';
// import Delete from './components/newclass/Delete';
// import DisplayStudent from './components/newclass/displaystudent';
// class Anything extends Component {
//   state={firstname: "", lastname: "", allStudents: {js1: [], js2: [], js3: []}, myClass:"js1"};
//   setInfo = e=>{
//    this.setState({[e.target.name]: e.target.value})
//   }

// addStudent= ()=>{

  
//   let {allStudents, firstname, lastname, myClass} = this.state;
//   allStudents[myClass].push({firstname, lastname, captain:false});
//   // console.log(allStudents, firstname, lastname, myClass);

//   this.setState({allStudents});
// }
// hideOrShow=ind=>{
//   let {allStudents} = this.state;
//   if(allStudents[ind].show){
//     allStudents[ind].show= false;
//   }else{
//     allStudents[ind].show= true;
//   }
  
//   this.setState({allStudents});
// }
// setClass=e=>{
//   this.setState({myClass: e.target.value});
// }
// makeCaptain=(cls, i)=>{
//   let {allStudents} = this.state;

//   for (let index = 0; index < allStudents[cls].length; index++) {
//       if(index==i){
//         allStudents[cls][index].captain= true;
//       }else{
        
//         allStudents[cls][index].captain= false;
//       }
  
//   }
//   this.setState({allStudents});

// }




//   render() { 
//     let {allStudents, firstname, lastname} = this.state;
//     // console.log(allStudents);
// return(
//   <>
//   <select value={this.state.myClass} onChange={this.setClass}>
//     <option value="js1">js1</option>
//     <option value="js2">js2</option>
//     <option value="js3">js3</option>
//   </select>

//     <input placeholder="firstname" value={firstname} name="firstname" onChange={this.setInfo} />
//     <input placeholder="lastname" value={lastname} name="lastname" onChange={this.setInfo}/>
//     {/* <input placeholder="department" value={department} name="department" onChange={this.setInfo}/> */}

//     <button onClick={this.addStudent}>add student</button>
// {allStudents['js1'].length>0? allStudents['js1'].map((student, i)=>(
//   <div key={i}>
//     <h3>student {i+1}</h3>
//     {student.firstname} {student.lastname} {student.captain?<button>Captain</button>: <button onClick={()=>this.makeCaptain('js1', i)}>make captain</button>}
//   </div>
// )):<div>No student in JS1</div>}

// {allStudents['js2'].length>0? allStudents['js2'].map((student, i)=>(
//   <div key={i}>
//     <h3>student {i+1}</h3>
//     {student.firstname} {student.lastname} {student.captain?<button>Captain</button>: <button onClick={()=>this.makeCaptain('js2', i)}>make captain</button>}
//   </div>
// )):<div>No student in JS2</div>}
   
//    {allStudents['js3'].length>0? allStudents['js3'].map((student, i)=>(
//   <div key={i}>
//     <h3>student {i+1}</h3>
//     {student.firstname} {student.lastname} {student.captain?<button>Captain</button>: <button onClick={()=>this.makeCaptain('js3', i)}>make captain</button>}
//   </div>
// )):<div>No student in JS3</div>}

//   </>
// )
   
//   }
// }
 
// export default Anything;

// class App extends Component {
//   state = { students: [{name: "Taiwo",dept: "software", school: "SQI"},
//   {name: "Kenny",dept: "hardware", school: "SQI"},
//   {name: "Idowu",dept: "CSE", school: "LAUTECH"}], name: "Kenny",  inps:[{placeholder:'', inpName:'', value:''}] };
//   deleteStudent = i=>{
//     let {students} = this.state;
//     students = students.filter((_, ind)=>ind!==i);
//     this.setState({students});
//   }
//   addStudent = student=>{
//     let {students} = this.state;
//     this.setState({students: [...students, student]})
//   }
//   render() { 
//     let {students}= this.state;
//     return <>

//     {students.length>0?
//          students.map((student, i)=>(
//            <>
//            <DisplayStudent key={i} std={student} />
//            <Delete delStd={()=>this.deleteStudent(i)}/>
//            </>
//            ))
//            :
//            <div>No student present</div>
//          }
//            <AddStudent addStd={this.addStudent}/>
   
//     </>
//   }
// }



 
// export default App;

import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useState } from 'react/cjs/react.development';
import { Redirect, Route, Switch } from 'react-router';
import NavBar from './NavBar';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import MoreDetails from './MoreDetails';


const App = ()=>{

      let anyname = useSelector(state => state);
      let dispatch = useDispatch();

let [name, setName] = useState("Joshua");
useEffect(()=>{
   console.log("Hello")
}, [])

    return( <div>
           <h2> I am the app file. There are { anyname } students here.</h2>

           <button onClick={()=>dispatch({type: "INCREMENT", payload: 1})}> Increase </button>
           <button onClick={()=>dispatch({type: "INCREMENT", payload: 2})}> Increase </button>
           <button onClick={()=>dispatch({type: "INCREMENT", payload: 3})}> Increase </button>
           <button onClick={()=>dispatch({type: "DECREMENT"})}> Decrease </button>

<div>
      I am App Page {name}</div>
      <NavBar/>
      <Switch>
      <Route  path='/' exact>
            <Home></Home>
      </Route>
      <Route  path='/About' exact>
            <About></About>
      </Route>
      <Route  path='/Contact' exact>
            <Contact></Contact>
      </Route>
      <Route  path='*' exact>
          <Redirect to='/'></Redirect>
      </Route>  
      <Route path='/About/:id' exact>
           <MoreDetails></MoreDetails>
      </Route>

      </Switch>

    </div>
    )
}
 
export default App;



