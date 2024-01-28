import React,{useState,useMemo} from "react";

const Memo=()=>{
    const [Number,UpdateNumber]=useState(0)
    const [dark,UpdateTheme]=useState(false)
    const doubleNumber=useMemo(()=>{
        return doubleNumberSlow(Number)
    },[Number])
    function doubleNumberSlow(num){
        console.log("Ex")
        for(let i=0;i<1000000;i++){}
        
        return num*2
    }

    const theme=useMemo(()=>{
        return {
        backgroundColor:dark?"black":"white",
        color:dark?"white":"black"
    }
    },[dark])
    return(
        <div>
        <h1>Dangerous hook</h1>
        <input type="number"  value={Number} onChange={(event)=>UpdateNumber(event.target.value)}/>
        <button onClick={()=>{UpdateTheme(dark =>!dark)}}>Change Theme</button>
        <h2 style={theme}>The doubled number is {doubleNumber}</h2>
        </div>
    )
}
export default Memo;