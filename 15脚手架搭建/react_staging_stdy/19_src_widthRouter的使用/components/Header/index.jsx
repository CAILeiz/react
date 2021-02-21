import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  // 路由回退
  goBack = () => {
    this.props.history.goBack();
  }
  // 路由前进
  goForward = () => {
    this.props.history.goForward();
  }
  // 路由回退两步
  go = () => {
    this.props.history.go(-2);
  }
  render() {
    console.log("Header组件", this.props);
    return (
      <div>
        <h1>React Router Demo</h1>
        &nbsp; <button onClick={() => this.goBack()}>回退</button>
        &nbsp; <button onClick={() => this.goForward()}>前进</button>
        &nbsp; <button onClick={() => this.go()}>go</button>
        <h1></h1>
      </div>
    );
  }
}
export default withRouter(Header);
// withRouter可以加工一般组件,让一般组件具备路由组件所特有的API 实际上就是给this.props中添加history loaction match等路由组件的属性
// withRouter的返回值是一个新组件
