import React, { Component } from "react";
import MyNavLink from "../../components/MyNavLink";
import News from "./News"
import Message from "./Message"
import {Route, Redirect, Switch} from "react-router-dom"

export default class Home extends Component {
  render() {
    return (
      <div style={{boxShadow: "0 0 4px #ccc", padding: "10px"}}>
        <h3 style={{background: "orange"}}>我是Home组件</h3>
        <div style={{ display: "flex" }}>
          <h2>
            <MyNavLink to="/home/news">News</MyNavLink>
          </h2>
          <h2 style={{marginLeft: "20px"}}>
            <MyNavLink to="/home/message">Message</MyNavLink>
          </h2>
        </div>
        <div>
            <Switch>
                <Route path="/home/news" component={News}/>
                <Route path="/home/message" component={Message}/>
                <Redirect to="/home/news"/>
            </Switch>
        </div>
      </div>
    );
  }
}
