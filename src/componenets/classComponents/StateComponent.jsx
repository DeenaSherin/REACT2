import React from "react";

class StateComponent extends React.Component

{
    constructor(){
        super()
        this.state={
            name :"KEC",
            course:"MERN"
        }
    }
 ChangeState=()=> {

    console.log("Kongu Engineering Colllege")//useState should be used when we come yo hooks
        
    }
    render(){
        return(
            <div>
            <h1>This is a State Component</h1>
           <h2> Hello,{this.state.name} <br/>This is {this.state.course} class</h2>
           <h3>I am changing the state of {this.state.name} to {this.ChangeState()}</h3>
           <button onMouseOver={this.ChangeState}>CLICK ME TO CHANGE STATE</button>
           
           </div>

        )
    }
}
export default StateComponent;