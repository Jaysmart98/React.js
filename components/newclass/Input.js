import React, { Component } from 'react';
class Input extends Component {
    state = { }
    render() { 
        let {addStud, i} = this.props
        let {placeholder, name, val} = this.props.inps;
        return <>
                <input name={name} placeholder={placeholder} value={val} onChange={(event)=>addStud(event, i)}/>
            </>
    }
}
 
export default Input;