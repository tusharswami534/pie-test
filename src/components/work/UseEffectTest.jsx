import React, { useEffect, useState } from 'react'

const UseEffectTest = () => {

    const [count , setCount] = useState(0)

    useEffect(() => {
       setTimeout(() => {
              setCount(count + 1 === 101 ? 100 :  count + 1)
       } , 1000)
    }, [count])
  return (
    <div className='d-flex flex-column justify-content-center align-items-center py-5'>
      <h2 className='text-black text-center fw-bold'>UseEffect</h2>
        <p className='text-black text-center use-effect-text font-weight-bold'>{count}</p>
    </div>
  )
}

export default UseEffectTest
