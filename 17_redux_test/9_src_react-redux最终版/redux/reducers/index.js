import { combineReducers } from "redux";

// 引入为Count组件服务的reducer
import count from "./count";
// 引入为Person组件服务的reducer
import persons from "./person";

// 汇总所有的reducer为一个总得reducer
export default combineReducers({
  count,
  persons,
});
