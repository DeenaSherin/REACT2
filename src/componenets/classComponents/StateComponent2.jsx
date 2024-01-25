import React from "react";
class StateComponent2 extends React.Component{
    constructor(){
        super()
            this.okay={
                tho :"DO IT"
        }
    }
    render(){
        return(
            <div>
            <h3>YOU CAN {this.okay.tho}</h3>
            </div>
        )
        
    }
}
export default StateComponent2