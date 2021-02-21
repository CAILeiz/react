// 该文件准们用于暴露一个store对象,整个应用只有一个store对象
// 引入createStore,专门用于创建redux中最为核心的store对象
import {createStore, applyMiddleware} from "redux"
// 引入为Count组件服务的reducer
import countReducer from "./count_reducer"
import thunk from "redux-thunk";

export default createStore(countReducer, applyMiddleware(thunk));

