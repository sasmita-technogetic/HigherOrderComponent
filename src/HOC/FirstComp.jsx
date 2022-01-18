import React, { useState } from 'react'
import MainComp from './MainComp'

const FirstComp = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <MainComp message={count} changeing="Count change" />
            <button onClick={() => setCount(count + 1)}>Click </button>
        </div>
    )
}

export default FirstComp
