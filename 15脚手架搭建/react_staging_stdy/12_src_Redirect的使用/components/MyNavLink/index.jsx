import React, { Component } from "react";
import {NavLink} from "react-router-dom"

export default class Header extends Component {
  render() {
        console.log("Header组件", this.props);
        return (
          <NavLink {...this.props} activeClassName="height-light"></NavLink>
        )
  }
}
