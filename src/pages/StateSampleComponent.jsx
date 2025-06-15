import React, { useState } from 'react'

function StateSampleComponent() {

    const [count, setcount] = useState(0)
    function decrementCount(){
        setcount(prevCount => prevCount-1)
        
    }
     function incrementCount(){
        setcount(prevCount => prevCount+1)
    }
    const [discount,setdiscount] = React.useState(100)
    const clicked = ()=>{
        setdiscount(75)
    }
  return (
   <div>
     <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
            <div>
            <p data-testid="price">${discount}</p>
            <button onClick = {clicked}>Apply Discount</button>
        </div>
   </div>
  )
}

export default StateSampleComponent
