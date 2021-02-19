import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class List extends Component {
  // 初始化状态
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ""
  };
  componentDidMount() {
    this.token = PubSub.subscribe("daleizi", (_, stateObj) => {
      this.setState(stateObj);
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }
  render() {
    const { users, isFirst, isLoding, err } = this.state;
    return isFirst ? (
      <h2>欢迎使用,输入关键字,随后点击搜搜</h2>
    ) : isLoding ? (
      <h2>Loading......</h2>
    ) : err ? (
      <h2 style={{ color: "red" }}>{err}</h2>
    ) : (
      users.map((user) => {
        return (
          <div style={{ margin: "10px" }} key={user.id}>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              <img
                src={user.avatar_url}
                alt="avatar_url"
                style={{ width: "100px", height: "100px" }}
              />
            </a>
            <h2>{user.login}</h2>
          </div>
        );
      })
    );
  }
}
