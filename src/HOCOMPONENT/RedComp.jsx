import React from 'react'
import Counter from './Counter'

const RedComp = (props) => {
  return (
    <div className="section">
      <h2 style={{ backgroundColor: 'red', width: 100 }}>
        Red
        <props.comp />
      </h2>
    </div>
  )
}

export default RedComp
