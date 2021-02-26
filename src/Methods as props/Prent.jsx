import React, { Component } from 'react'
import Child from "./child";

class Prent extends Component {
    constructor(){
        super();

        this.state = {
            parentName : "Parent"
        }

        this.greet = this.greet.bind(this)
    }

    greet(deepak){
        alert(`hi ${this.state.parentName},${deepak}`)
    }

    render() {
        return (
            <div>
                <Child greetParent={this.greet} />
            </div>
        )
    }
}

export default Prent
