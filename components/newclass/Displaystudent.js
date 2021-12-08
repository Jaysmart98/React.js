import React, { Component } from 'react';
// import Delete from './Delete';
class DisplayStudent extends Component {

    delete= i=>{
        this.props.delStd(this.deleteStudent)
      }

    render() { 
        let {name, dept, school} = this.props.std;
        
        return <>
      
        <div>
         Name: {name},
          department: {dept}, at {school}<br/>
          I hope you are happy to meet me.
          {/* <button onClick={delStudent}>Delete student</button> */}
          {/* <Delete delStd={this.delete}/> */}
        </div>
      
        </>
    }
}
 
export default DisplayStudent;