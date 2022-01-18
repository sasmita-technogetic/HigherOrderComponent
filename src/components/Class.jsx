import React, { Component } from 'react'

export class Class extends Component {
    constructor(props) {
        super()
        this.state = {
            message: "Hello Welcome to Reactjs World"
        }
    }
    changeMessage() {
        this.setState({
            message: ` Thank You ${this.props.name}`


        })
    }
    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Click here</button>
            </>
        )
    }
}

export default Class
