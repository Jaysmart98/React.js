import React from 'react';
import { useHistory } from 'react-router';

const Contact=()=>{
    let history = useHistory()
    const goToHome=()=>{
        alert("I am going home, going home")
        history.push('/')
    }

    return(
        <div>
            ! am contact Page
            <button onClick={()=>goToHome()}>Click me!</button>
        </div>
    )
}
    
export default Contact;