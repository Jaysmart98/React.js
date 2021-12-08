import React, { useState } from 'react';
import { useHistory } from 'react-router';

const About=()=>{

    const history = useHistory()
    const moreDetails = (val)=>{
        history.push(`About/${val}`)
    }
    const [student, setStudent] = useState([
         {name: "Wesley", dept: "Software"},
         {name: "joshua", dept: "Hardware"},
         {name: "Kayode", dept: "CSE"},
    ])
    
    return( <div>
             {student.map((val,i)=>(<>
             <div>{val.name}</div>
             <button onClick={()=>moreDetails(val.name)}>More Details....</button>
                 </>
             )) }
         </div>
    )
}
   

 export default About;