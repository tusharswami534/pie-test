import React, { useState, useEffect } from 'react';


const ForLoopTest = () => {
  const [count, setCount] = useState(9);

  useEffect(() => {
   
      for (let i = 9; i >= 0; i--) {
          setTimeout(() => {
              setCount(i);
          }, (9 - i) * 1000);
      }
  }, []);
  return (
    <div>
      <h2 className='text-center fw-bold'>For Loop</h2>
      <p className='text-center'>{count}</p>
    </div>
  )
}

export default ForLoopTest
