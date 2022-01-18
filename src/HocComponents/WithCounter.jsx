import React, { Component } from 'react'

const UpdatedComponent = (OriginalComponent) =>{
    class NewComponent extends Component {
        render() {
            return (
                <div>
                    <OriginalComponent name="sasmita"/>
                </div>
            )
        }
    }
    return NewComponent
}
 

export default UpdatedComponent
