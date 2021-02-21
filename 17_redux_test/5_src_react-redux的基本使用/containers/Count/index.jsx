// 引入Count的UI组件
import CountUI from "../../components/Count"
// 引入用于connect用于连接UI组件与redux
import {connect} from "react-redux"
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from "../../redux/count_action"

// 1.mapStateToProps函数返回的对象中
// 2.对象中的key作为传递给UI组件props的key,value就作为传递给UI组件的props的value
// mapStateToProps用于传递状态
// state参数是connect默认给你的
function mapStateToProps(state) {
    return {count: state}
}

// 1.mapDispatchToProps函数返回的对象中
// 2.对象中的key作为传递给UI组件props的key,value就作为传递给UI组件的props的value
// mapDispatchToProps用于传递操作状态的方法
// dispatch参数是connect默认给你的
function mapDispatchToProps(dispatch) {
    return {
        jia: (data) => {
            dispatch(createIncrementAction(data))
        },
        jian: (data) => {
            dispatch(createDecrementAction(data))
        },
        jiaAsync: (data, time) => {
            dispatch(createIncrementAsyncAction(data, time))
        },
    }
}


// 使用connect()()创建并暴露一个Count的容器组件 
// connect的第一个参数是a,b a,b必须是函数 connect会自动调用这个两个函数,用于将状态和操作状态的方法传递给CountUI组件
// 第二个参数是该容器组件要连接的UI组件 
// 返回值是一个容器组件

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
