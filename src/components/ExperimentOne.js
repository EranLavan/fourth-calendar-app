import React, { useState } from 'react'

function ExperimentOne() {

  const [result, setResult] = useState(0)

  const increase = () => {
    setResult(prevResult => prevResult + 1)
  }

  return (
    <div>
        <button onClick={increase}>increase</button>

        {result}
      
    </div>
  )
}

export default ExperimentOne
