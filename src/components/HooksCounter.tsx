import React, { useState } from 'react'

function HooksCounter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hooks Counter</h1>
      <button onClick={() => setCount(count + 1)}>Count {count} </button>
    </>
  )
}

export default HooksCounter
