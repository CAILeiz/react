import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";

export default class Search extends Component {
  handleSearch = () => {
    // 获取用户输入(连续解构赋值 + 重命名)
    const {
      keyWordElement: { value: keyword },
    } = this;
    // 发送请求前通知App更新状态
    PubSub.publish("daleizi", { isFirst: false, isLoding: true });
    // 发送网络请求
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) => {
        // 请求成功后通知App更新状态
        PubSub.publish("daleizi", {
          isFirst: false,
          isLoding: false,
          users: res.data.items,
        });
      })
      .catch((err) => {
        console.log("出错了", err);
        PubSub.publish("daleizi", {
          isFirst: false,
          isLoding: false,
          err: "出错了",
        });
      });
  };
  render() {
    return (
      <div>
        <h3>Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            ref={(c) => (this.keyWordElement = c)}
          />
          &nbsp;
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </div>
    );
  }
}
