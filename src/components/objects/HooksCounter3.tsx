import React, { useState } from 'react'

function HooksCounter3() {
  const [name, setName] = useState({firstName: '', lastName: ''})

  return (
    <>
      <input type="text" onChange={(e) => setName({...name, firstName: e.target.value})} />
      <input type="text" onChange={(e) => setName({...name, lastName: e.target.value})} />
      <h2>{name.firstName + " " + name.lastName}</h2>
    </>
  )
}

export default HooksCounter3
