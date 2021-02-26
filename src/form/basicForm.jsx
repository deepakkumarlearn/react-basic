import React, { Component } from "react";

export class basicForm extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      textarea: "",
      selectQuestion: "Vue",
    };
  }

  userHandle = (event) => {
    this.setState({ username: event.target.value });
    console.log(this.state.username);
  };

  textHandle = (event) => {
    this.setState({ textarea: event.target.value });
    console.log(this.state.textarea);
  };

  handleSelect = (event) => {
    this.setState({ selectQuestion: event.target.value });
  };

  handleSubmit = (event)=>{
    alert(`value are ${this.state.username}, ${this.state.textarea}, ${this.state.selectQuestion}`)
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <lable>Username</lable>
            <input
              type="text"
              value={this.state.username}
              onChange={this.userHandle}
            />
          </div>
          <div>
            <lable>Username</lable>
            <textarea value={this.state.textarea} onChange={this.textHandle} />
          </div>

          <lable>Select : </lable>
          <select
            value={this.state.selectQuestion}
            onChange={this.handleSelect}
          >
            <option value="react">React</option>
            <option value="Vue">Vue</option>
            <option value="Angular">Angular</option>
            <option value="Lenovo">Lenovo</option>
          </select>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default basicForm;
