import "../../css/color.css"
import { useState } from "react"
const About = () =>{
        const [college,updateCollege]=useState("KEC")
        const updateClg=()=>{
            updateCollege("Kongu Engineering College")
        }
    return(
        <div>
      <h2> Welcome to {college}</h2>
      <button onDoubleClick={updateClg}>Update College Name</button>
        </div>
    )
}
export default About;