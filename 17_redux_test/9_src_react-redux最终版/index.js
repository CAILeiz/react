import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import store from "./redux/store";
import { Provider } from "react-redux";
ReactDOM.render(
  // 此处需要用Provide包裹App,目的是让App所有的后代容器组件都能接收到store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);