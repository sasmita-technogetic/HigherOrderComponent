import React from 'react'

const Hoc = (props) => {
  return (
    <div className="section">
      <h2 style={{ backgroundColor: 'green', width: 100 }}>
        Green
        <props.comp />
      </h2>
    </div>
  )
}

export default Hoc
