import React, { Component } from 'react'

class counter extends Component {

    constructor(){
        super()

        this.state = {
            counter : 1
        }
    }

    chnageHandleEvent(){
        // this.state = this.state.counter + 1;
        // this.setState(
        //     {counter : this.state.counter + 1},
        //     ()=>console.log("callback function ",this.state.counter) )

        this.setState((previous)=>({counter : previous.counter +1 }))
        console.log(this.state.counter)
    }

    fiveConter(){
        this.chnageHandleEvent();
        this.chnageHandleEvent();
        this.chnageHandleEvent();
        this.chnageHandleEvent();
        this.chnageHandleEvent();
    }
    render() {
        return (
            <div>
                    <h1>{this.state.counter}</h1>
                    <button onClick={()=>this.fiveConter()} >Click</button>
            </div>
        )
    }
}

export default counter;
