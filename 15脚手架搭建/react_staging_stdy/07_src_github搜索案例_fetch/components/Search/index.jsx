import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";

export default class Search extends Component {
  handleSearch = async() => {
    // 获取用户输入(连续解构赋值 + 重命名)
    const {
      keyWordElement: { value: keyword },
    } = this;
    // 发送请求前通知App更新状态
    PubSub.publish("daleizi", { isFirst: false, isLoding: true });
    // 发送网络请求 axios
    // axios
    //   .get(`https://api.github.com/search/users?q=${keyword}`)
    //   .then((res) => {
    //     // 请求成功后通知App更新状态
    //     PubSub.publish("daleizi", {
    //       isFirst: false,
    //       isLoding: false,
    //       users: res.data.items,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log("出错了", err);
    //     PubSub.publish("daleizi", {
    //       isFirst: false,
    //       isLoding: false,
    //       err: "出错了",
    //     });
    //   });

    // 发送网络请求---使用fetch发送(未优化)
    // fetch(`https://api.github.com/search/users?q=${keyword}`).then(
    //   res => {
    //     console.log("服务器联系成功");
    //     // res.json()返回的是一个成功状态的pending
    //     return res.json();
    //   },
    //   err => {
    //     console.log("服务器联系失败了", err);
    //   }
    // ).then(
    //   res => {
    //     console.log("获取数据成功", res);
    //   },
    //   err => {
    //     console.log("获取数据失败了", err);
    //   }
    // )

    // 发送网络请求---使用fetch发送(已优化)
    // fetch(`https://api.github.com/search/users?q=${keyword}`)
    //   .then((res) => {
    //     console.log("服务器联系成功");
    //     // res.json()返回的是一个成功状态的pending
    //     return res.json();
    //   })
    //   .then((res) => {
    //     PubSub.publish("daleizi", {
    //       isFirst: false,
    //       isLoding: false,
    //       users: res.items,
    //     });
    //     console.log("获取数据成功", res.items);
    //   })
    //   .catch((err) => {
    //     PubSub.publish("daleizi", {
    //       isFirst: false,
    //       isLoding: false,
    //       err: "出错了",
    //     });
    //     console.log("获取数据失败了", err);
    //   });

    // 发送网络请求---使用fetch发送 使用await(已优化)
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${keyword}`);
      const data = await response.json();
      console.log(data.items);
    } catch (error) {
      console.log(error);
    }
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
