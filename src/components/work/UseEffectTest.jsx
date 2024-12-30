import React, { useEffect, useState } from 'react'

const UseEffectTest = () => {

    const [count , setCount] = useState(0)

    useEffect(() => {
       setTimeout(() => {
              setCount(count + 1 === 101 ? 0 : count + 1)
       } , 10)
    }, )
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <p className='text-black text-center use-effect-text font-weight-bold'>{count}</p>
    </div>
  )
}

export default UseEffectTest
