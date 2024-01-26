import "../../css/color.css"

import { useReducer } from "react"

const value = { count: 0 }

function countFunction(state, action) {
  switch (action.type) {
    case 'sub':
      return { count: state.count - 1 }

    case 'add':
      return { count: state.count + 1 }

    case 'reset':
      return { count: value.count }

    default:
      return { count: value.count }
  }
}

const Block = () => {
  const [countValue, updateCount] = useReducer(countFunction, value)

  return (
    <div>
      <h1>This is a useReducer example</h1>
      <h2>Count: {countValue.count}</h2>
      <button onClick={() => updateCount({ type: "sub" })}>SUB</button>
      <button onClick={() => updateCount({ type: "add" })}>ADD</button>
      <button onClick={() => updateCount({ type: "reset" })}>RESET</button>
    </div>
  )
}

export default Block;
