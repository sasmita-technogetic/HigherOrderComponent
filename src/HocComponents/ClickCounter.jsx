import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

export class ClickCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    })
  }
  render() {
    const { count } = this.state
    return (
      <>
        <h1>{count}</h1>
        <button onClick={this.incrementCount}>
          {this.props.name} Clicked {count} times
        </button>
      </>
    )
  }
}

export default UpdatedComponent(ClickCounter)
