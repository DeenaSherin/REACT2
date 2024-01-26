import "../../css/color.css"

import { useState,useEffect } from "react"
const Experience = () =>{
        const [tabName,setTabName]=useState("posts")
        const updateClg=()=>{
            setTabName("posts")
        }
        const updateClg1=()=>{
          setTabName("posts")
      }
      const updateClg2=()=>{
        setTabName("posts")
    }
        useEffect(()=>{
         console.log("Hello")
        }
        )

      //    fetch(`'https://jsonplaceholder.typicode.com/${tabName}'`)
      // .then(response => response.json())
      // .then(json => console.log(json))
      //   },[tabName])
    return(
        <div>
      <h2>{tabName}</h2>
      <button onClick={updateClg}>Click me if you get cold</button>
      <button onClick={updateClg1}>Click me if you get fever</button>
      <button onClick={updateClg2}>Click me if you get covid</button>
        </div>
    )
}
export default Experience;