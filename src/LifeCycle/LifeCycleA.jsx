import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Deepak",
    };
    console.log("LifeCycleA : Constructor ");
  }


  static getDerivedStateFromProps(){
    console.log("LifeCycleA : getDerivedStateFromProps")
    return null
  } 

  componentDidMount(){
      console.log("LifeCycleA : componentDidMount")
  }
  render() {
    console.log("LifeCycleA : render");
    return (
      <div>
        <h1>render methods call</h1>
        <LifeCycleB/>
      </div>
    );
  }
}

export default LifeCycleA;
