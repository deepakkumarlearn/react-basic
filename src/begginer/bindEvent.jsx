import React, { Component } from 'react'

class bindEvent extends Component {

    constructor(){
        super()

        this.state = {
            message : "Not Okay"
        }
    }

    handleEvent = ()=> {
        this.setState({message : "okay"})
        console.log("button click");
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.handleEvent}>Change Mood</button>
            </div>
        )
    }
}

export default bindEvent
