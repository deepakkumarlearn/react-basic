import React, { Component } from 'react';

class welcome extends Component{
    constructor(){
        super();

        this.state = {
            Message :"Welcome Visitor"
        }
    }

    handleChange(){
        this.setState({
            Message :"Thank You For Subcribing"
        })
    }

    render(){
        return(
            <div>
               <h1> {this.state.Message} </h1>
               <button onClick={()=>this.handleChange()} >Suscribe</button>
            </div>
        )
    }
}

export default welcome;