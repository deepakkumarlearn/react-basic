import React, { Component } from 'react'

export class conditional_ren extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {

        // if else method 
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Deepak</div>
        // }else{
        //     return <div>Welcome Guest</div>
        // }

        // element method 
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Deepak</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }

        // return message;

        // ternary operator 
    //   return  this.state.isLoggedIn?<div>Welcome Deepak</div> : <div>Welcome Guest</div>
    
        return this.state.isLoggedIn && <div>Welcome Deepak</div>


    }
}

export default conditional_ren;
