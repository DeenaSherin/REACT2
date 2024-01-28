import React,{useState,useCallback} from "react"
const UseCallBack=()=>{
    const [count,setCount]=useState(0)
    const handlingCallbackFunction =useCallback(()=>{
        console.log(`Count:${count}`)


    },[count])
    

    return(
        <div>
        <h1>This is a Call back Example</h1>
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>Add one</button><br /><br />
        <button onClick={handlingCallbackFunction}>CallbackCount</button>
        </div>
    )
}
export default UseCallBack;