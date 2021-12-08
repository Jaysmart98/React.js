import React from 'react';
// imrc
// import Captain from './captain';

    class ClassRegister extends React.Component{

        state = {
            studentInfo:[],
            jss1:[],
            jss2:[],
            jss3:[],
            classes:"JSS 1",
            fName:"",
            lName:"",
            dept:"", 
            checked : false,
            show: false
        }
        setData = e => {
            this.setState({[e.target.name]: e.target.value})
        }

        addStudent = e => {
            let {fName, lName, classes, jss1, jss2, jss3} = this.state;
            // e = this.setState({
            //     fName, lName, classes:[this.setState({jss1:[...jss1, fName, lName, classes]}),  this.setState({jss2:[...jss2, fName, lName, classes]}),  this.setState({jss3:[...jss3, fName, lName, classes]})]
            // })
        //    e = {classes='JSS 1'? 
        //     this.setState({jss1:[...jss1, fName, lName, classes]})
        //     :classes='JSS 2'?
        //     this.setState({jss2:[...jss2, fName, lName, classes]})
        //     :classes='JSS 3'?
        //     this.setState({jss3:[...jss3, fName, lName, classes]})
        //     }

            if (classes==='JSS 1') {
                this.setState({jss1:[...jss1, {fName, lName, classes:'JSS 1'}]})
            } else if(classes==='JSS 2') {
                this.setState({jss2:[...jss2, {fName, lName, classes:'JSS 2'}]})
            }else if(classes==='JSS 3'){
                this.setState({jss3:[...jss3, {fName, lName}]})
            }

            
            // e = this.setState({ studentInfo:[...studentInfo,  {fName, lName, classes}]})
            // this.setState({studentInfo:[...studentInfo, jss1, jss2, jss3]})
            console.log(jss1);
            console.log(jss2);
            console.log(jss3);
            console.log(fName);
            console.log(lName);
            console.log(classes)

            // console.log(studentInfo);
        }

        captain = (i, j, k) => {
            let { jss1, jss2, jss3, classes} =this.state
                if (classes==='JSS 1') {
                    this.setState (
                        jss1.map((cur, ind) =>{
                            if (ind===i){
                                return cur.checked = true
                            } else {
                            return cur.checked = false
                            }
                        }
                    ))
                } else if(classes==='JSS 2'){
                    this.setState (
                        jss2.map((cur, ind) =>{
                            if (ind===j){
                                return cur.checked = true
                            } else {
                            return cur.checked = false
                            }
                        }
                    ))
                } else {
                    this.setState (
                        jss3.map((cur, ind) =>{
                            if (ind===k){
                                return cur.checked = true
                            } else {
                            return cur.checked = false
                            }
                        }
                    ))
                }
                
            
            // let {checked} =this.state;
            // this.setState({checked:this.state.checked});
            }

        cap1 = (i) => {
            let {jss1} = this.state
            this.setState (
                jss1.map((cur, ind) =>{
                    if (ind===i){
                        return cur.checked = true
                    } else {
                    return cur.checked = false
                    }
                }
            ))
        }
        cap2 = (j) => {
            let {jss2} = this.state
            this.setState (
                jss2.map((cur, ind) =>{
                    if (ind===j){
                        return cur.checked = true
                    } else {
                    return cur.checked = false
                    }
                }
            ))
        }
        cap3 = (k) => {
            let {jss3} = this.state
            this.setState (
                jss3.map((cur, ind) =>{
                    if (ind===k){
                        return cur.checked = true
                    } else {
                    return cur.checked = false
                    }
                }
            ))
        }
        
        render() {  
            let {classes, fName, lName, jss1, jss2, jss3} = this.state;
            
            return (
                <>
                    <input onChange= {this.setData} value={fName} placeholder='First Name' name='fName'/>
                    <input onChange= {this.setData} value={lName} placeholder='Last Name' name='lName'/>

                    <select onChange ={this.setData} name="classes" value={classes}>
                        <option name='jss1'>JSS 1</option>
                        <option name='jss2'>JSS 2</option>
                        <option name='jss3'>JSS 3</option>
                    </select>
                    <button onClick={()=>this.addStudent()}>Create Student</button>
                    

                    <div className='studentDisplay'>
                        <h2>JSS One</h2>
                        {jss1.length> 0?
                            jss1.map(({fName, lName, classes, checked}, i, jss1)=>(
                            <>
                                
                                <div name='jss1Div' key={i}>
                                    
                                        <div>
                                            ({i+1}) <br/>
                                            First Name: {fName}  <br/> Last Name: {lName} 
                                            
                                            {/* <div onstart={()=>this.captain(i)}></div> */}
                                            {checked?
                                            <button onClick={()=>this.cap1(i)} name='cap'>Captain</button>
                                            :
                                            <button onClick={()=>this.cap1(i)} name='cap'>Make Captain</button>
                                            }
                                            {/* <input type="radio" value="option1" checked={true} />
                                            <Captain/> */}
                                            <br/>
                                        </div>
                                    
                                
                                </div>
                            
                            </>
                            ))
                            :<>No student in JSS 1</>
                        }

                        <h2>JSS Two</h2>
                        {jss2.length> 0?
                            jss2.map(({jss2,fName, lName,checked}, j)=>(
                                <>
                                
                                <div name='jss2Div' key={j}>
                                    
                                    <div>
                                        ({j+1}) <br/>
                                        First Name: {fName}  <br/> Last Name: {lName}
                                        {checked?
                                        <button onClick={()=>this.cap2(j)} name='cap'>Captain</button>
                                        :
                                        <button onClick={()=>this.cap2(j)} name='cap'>Make Captain</button>
                                    } 
                                    </div>
                                                                    
                                </div>
                            </>
                            ))
                            :<>No student in JSS 2</>
                        }

                        <h2>JSS Three</h2>
                        {jss3.length> 0?
                            jss3.map(({jss3,fName, lName, checked}, k)=>(
                            <>
                                <div name='jss3Div' key={k}>
                                
                                <div>
                                    ({k+1}) <br/>
                                    First Name: {fName}  <br/> Last Name: {lName} 
                                    {checked?
                                    <button onClick={()=>this.cap3(k)} name='cap'>Captain</button>
                                    :
                                    <button onClick={()=>this.cap3(k)} name='cap'>Make Captain</button>
                                }
                                </div>
                                
                                </div>
                            </>
                            ))
                            :<>No Student in JSS 3</>
                        }
                        
                    </div>    
                </>
            )
        }
    }

export default ClassRegister;