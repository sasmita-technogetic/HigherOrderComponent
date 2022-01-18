import React, { useState } from 'react'
import MainComp from './MainComp'

const ThirdComp = () => {
    const [count, setCount] = useState(2)
    return (
        <div>
            <MainComp message={count} changeing="Count change" />
            <button onClick={() => setCount(count + 1)}>Click </button>
        </div>
    )
}

export default ThirdComp
