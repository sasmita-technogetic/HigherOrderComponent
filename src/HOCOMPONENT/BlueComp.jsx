import React from 'react'

const BlueComp = (props) => {
  return (
    <div className="section">
      <h2 style={{ backgroundColor: 'blue', width: 100 }}>
        Blue
        <props.comp />
      </h2>
    </div>
  )
}

export default BlueComp
