import React, { useState } from 'react'

const Maincomp = () => {
  const [message, setMessage] = useState('Hello')
  const changeMessage = () => {
    setMessage('Welcome to Reactjs world')
  }
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={changeMessage}>update</button>
    </div>
  )
}

export default Maincomp
