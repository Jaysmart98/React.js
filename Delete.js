import React, { Component } from 'react';


class Delete extends Component {
    state = {  }
    render() {
        let {delStd} = this.props; 
        return ( <button onClick={delStd}>Delete Student</button> );
    }
}
 
export default Delete;