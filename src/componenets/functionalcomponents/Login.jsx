// import "../../css/color.css"

// import { useReducer } from "react"
// const value={count:0}
// function countFunction(state,action){
//   switch (action.type){
//     case 'sub':
//       return {count:state.count-1}
    
//     case 'add':
//       return {count:state.count+1}
    
//     case 'reset':
//       return {count:value.count}

//     default:
//       return {count:value.count}
//   }
// }
// const Login=()=>{
//  const[countValue,updateCount]=useReducer(countFunction,value)
//   return(
//   <div>
//   <h1>This ia useReducer example</h1>
//   <h2>Count: {countValue.count}</h2>
//   <button onClick={()=>updateCount({type:"sub"})}>SUB</button>
//   <button onClick={()=>updateCount({type:"add"})}>ADD</button>
//   <button onClick={()=>updateCount({type:"reset"})}>RESET</button>
//   </div>
//   )

// }
// src/App.js

import React, { useState } from 'react';
import "../../css/Login.css"


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login clicked');
  };

  return (
    <center>
    <br/>
    <br />
    <div className="whole">
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <br />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
    </div>
    </center>
  );
};

//export default App;

export default Login
