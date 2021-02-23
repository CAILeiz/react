// 该文件准们用于暴露一个store对象,整个应用只有一个store对象
// 引入createStore,专门用于创建redux中最为核心的store对象
import {createStore, applyMiddleware, combineReducers} from "redux"
// 引入为Count组件服务的reducer
import countReducer from "./reducers/count"
import personReducer from "./reducers/person"
// redux-thunk是为了给
import thunk from "redux-thunk";
// 引入redux开发者工具
import {composeWithDevTools} from "redux-devtools-extension"

const allReducers = combineReducers({
    he: countReducer,
    rens: personReducer
});
// createStore第一个参数是一个reducer函数实例
export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

