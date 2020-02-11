import React, { useState } from 'react'

function HooksCounter2() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(prevState => prevState + 1)}>Count {count} </button>
    </>
  )
}

export default HooksCounter2
