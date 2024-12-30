import React, { useState } from 'react'

const UseStateTest = () => {
    const [count , setCount] = useState(0)
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <p>{count}</p>
        <div className='d-flex justify-content-center gap-2 align-items-center'>
        <button className='py-1 px-3 bg-black text-white' onClick={() => setCount(count + 1)}>+</button>
        <button className='py-1 px-3 bg-black text-white' onClick={() => setCount(count - 1)}>-</button>
        </div>
    </div>
  )
}

export default UseStateTest
