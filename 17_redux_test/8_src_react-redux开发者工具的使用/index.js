import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import store from "./redux/store";
import { Provider } from "react-redux";
// Provider可以给每个容器组件添加一个store={store}属性
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
{
  /* Provider给每个容器组件传递store */
}
