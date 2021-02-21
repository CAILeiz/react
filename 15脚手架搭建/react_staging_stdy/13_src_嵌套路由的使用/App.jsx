import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./pages/About"; // About是路由组件
import Home from "./pages/Home"; // Home是路由组件
import Test from "./pages/Test"; // Test是路由组件
import Index from "./pages/Index" // INdex是路由组件
import Header from "./components/Header"; //Header是一般组件
import MyNavLink from "./components/MyNavLink"; // MyNavLink是一般组件

class App extends Component {
  render() {
    return (
      <div>
        <Header a={1} />
        <div style={{ display: "flex" }}>
          <div style={{boxShadow: "0 0 4px #ccc", width: "200px"}}>
            {/* 在html中使用a标签实现路由跳转
            <a href="#about">React</a>
            <a href="#home">Home</a> */}

            {/*在react中靠路由链接实现切换组件---编写路由链接 */}
            <h1>
              {/* 这里的标签内容About会传给props中的children */}
              <MyNavLink to="/about">About</MyNavLink>
            </h1>
            <h1 style={{marginTop: "40px"}}>
              <MyNavLink to="/home">Home</MyNavLink>
            </h1>
          </div>
          <div style={{ marginLeft: "50px" }}>
            {/* 注册路由 */}
            {/* <Route path="/" component={Index}/> */}
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/home" component={Home} />
              <Route path="/home" component={Test} />
              <Redirect to="/about"/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
