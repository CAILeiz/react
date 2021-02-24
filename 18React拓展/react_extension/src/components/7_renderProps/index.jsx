import React, { Component } from "react";
import "./index.css";

export default class RenderProps extends Component {
  render() {
    return (
      <div className="parent">
        <h3>我是RenderProps组件</h3>
        <A render={name => <B name={name}/>}/>
      </div>
    );
  }
}

class A extends Component {
    state = {
        name: "AName"
    }
  render() {
      const {name} = this.state
    return (
      <div className="child">
        <h3>我是A组件</h3>
        {this.props.render(name)}
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="grand">
        <h3>我是B组件</h3>
        <h4>接收到的A组件的name: {this.props.name}</h4>
      </div>
    );
  }
}
