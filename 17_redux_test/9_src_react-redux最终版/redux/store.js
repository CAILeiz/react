// 该文件准们用于暴露一个store对象,整个应用只有一个store对象
// 引入createStore,专门用于创建redux中最为核心的store对象
import {createStore, applyMiddleware} from "redux"
// redux-thunk是为了给
import thunk from "redux-thunk";
// 引入redux开发者工具
import {composeWithDevTools} from "redux-devtools-extension"
// 引入汇总之后的reducer
import reducers from "./reducers"

// createStore第一个参数是一个reducer函数实例
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

