import React, { useState } from 'react'

function Functional(props) {

    const [message, setMessage] = useState("Hello Welcome to reactjs")

    return (
        <>
            <h1>{message}</h1>
            <button onClick={() => { setMessage(`Thank you ${props.name}`) }}>click here</button>
        </>
    )
}

export default Functional
