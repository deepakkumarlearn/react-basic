import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Deepak",
    };
    console.log("LifeCycleB : Constructor ");
  }


  static getDerivedStateFromProps(){
    console.log("LifeCycleB : getDerivedStateFromProps")
    return null
  } 

  componentDidMount(){
      console.log("LifeCycleB : componentDidMount")
  }
  render() {
    console.log("LifeCycleB : render");
    return (
      <div>
        <h1>render methods call</h1>
      </div>
    );
  }
}

export default LifeCycleB;
