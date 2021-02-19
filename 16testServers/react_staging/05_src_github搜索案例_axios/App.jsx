import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

class App extends Component {
  // 初始化状态
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ""
  };
  // 保存users
  updateUsers = (userObj) => {
    this.setState(userObj);
  };
  render() {
    return (
      <div>
        <Search updateUsers={this.updateUsers} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <List {...this.state}/>
        </div>
      </div>
    );
  }
}
export default App;
