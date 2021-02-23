import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route, Redirect, Switch } from "react-router-dom";
import Loading from "../Loading"

const About = lazy(() => import("./About")); // About是路由组件
const Home = lazy(() => import("./Home")); // Home是路由组件

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div>
            <div>
              <NavLink to="/about" activeClassName="height-light">
                About
              </NavLink>
            </div>
            <div style={{ marginTop: "5px" }}>
              <NavLink to="/home" activeClassName="height-light">
                Home
              </NavLink>
            </div>
          </div>
          <div style={{ marginLeft: "50px" }}>
            {/* 注册路由 */}
            <Suspense fallback={<Loading/>}>
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                <Redirect to="about" />
              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
