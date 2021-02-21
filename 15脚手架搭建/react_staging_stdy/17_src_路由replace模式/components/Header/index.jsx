import React, { Component } from "react";

export default class Header extends Component {
  render() {
        console.log("Header组件", this.props);
        return <h1>React Router Demo</h1>;
  }
}
