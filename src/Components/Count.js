import { useState } from "react";

const Count = () => {
const [count,setCount] = useState(0)

const renderIncrement = (iteraion  = 1)=>{
  setCount(previousCount =>previousCount + iteraion)
}

const renderDecrement = (iteraion = 1)=>{
  setCount(previousCount => previousCount - iteraion)
}

const resetHandler = ()=>{
  setCount( 0 )
}
  return (

    <div>
      <h2>Count:{count}</h2>
      <button onClick={()=>renderIncrement(10)}>Increment ten</button>
      <button onClick={()=>renderIncrement(20)}>Increment twenty</button>
      <button onClick={()=>renderDecrement(5)}>Decrement five</button>
      <button onClick={()=>renderDecrement(10)}>Decrement ten</button>
      <button onClick={resetHandler}>Reset counter</button>
    </div>
  )
}

export default Count        