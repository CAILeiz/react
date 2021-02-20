import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  handleSearch = () => {
    // 获取用户输入(连续解构赋值 + 重命名)
    const {
      keyWordElement: { value: keyword },
    } = this;
    // 发送请求前通知App更新状态
    this.props.updateUsers({ isFirst: false, isLoding: true });
    console.log(keyword);
    // 发送网络请求
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) => {
        console.log("成功了", res.data.items);
        // 请求成功后通知App更新状态
        this.props.updateUsers({
          isFirst: false,
          isLoding: false,
          users: res.data.items,
        });
      })
      .catch((err) => {
        console.log("出错了", err);
        // 请求失败后通知App更新状态
        this.props.updateUsers({
          isFirst: false,
          isLoding: false,
          err: "出错了"
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
