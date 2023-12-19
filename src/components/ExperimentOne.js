import React, { useState } from 'react'

function ExperimentOne() {

  const [result, setResult] = useState(0)

  const increase = () => {
    setResult(prevResult => prevResult + 1)
  }

  const decrease = () => {
    setResult(prevResult => prevResult - 1)
  }

  const powerOfTwo = () => {
    setResult(prevResult => Math.pow(2, prevResult))
  }

  const reset = () => {
    setResult(0)
  }

  return (
    <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={powerOfTwo}>Power of Two</button>
        <button onClick={reset}>Reset</button>
        
        {result}
      
    </div>
  )
}

export default ExperimentOne
