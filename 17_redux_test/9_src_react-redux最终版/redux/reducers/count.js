// 1. 该文件是用于创建一个Count组件服务的reducer, reducer的本质上是一个函数
// 2. reducer函数会接到两个参数,分别是: 之前的状态(preState),动作对象(action)

import { INCREMENT, DECREMENT } from "../constant";
const initState = 0;
export default function countReducer(preState = initState, action) {
  console.log(preState, action);
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}