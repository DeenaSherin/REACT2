
import "../../css/color.css"
import { useState } from "react"    
const Home = () =>{

        const [name,updateName]=useState("")
        const newName=()=>{
            updateName("Sherin")


        }
    
    return(
        <div>
      <h2>HI,{name}</h2>
      <button onClick={newName}>WELCOME</button>
        </div>
    )
}
export default Home;