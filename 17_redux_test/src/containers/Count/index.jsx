// 引入Count的UI组件
import CountUI from "../../components/Count"
// 引入用于connect用于连接UI组件与redux
import {connect} from "react-redux"
import {
    createIncrementAction, 
    createDecrementAction,
    createIncrementAsyncAction
} from "../../redux/count_action"

// 映射状态
// const mapStateToProps = state => ({count: state})

// 映射操作状态的方法
// const mapDispatchToProps = dispatch => ({
//     jia: (data) => {
//         dispatch(createIncrementAction(data))
//     },
//     jian: (data) => {
//         dispatch(createDecrementAction(data))
//     },
//     jiaAsync: (data, time) => {
//         dispatch(createIncrementAsyncAction(data, time))
//     }
// })

// 使用connect()()创建并暴露一个Count容器组件
export default connect(
    state => ({count: state}),

    //mapDispatchToProps的一般写法 
    // dispatch => ({
    //     jia: (data) => {
    //         dispatch(createIncrementAction(data))
    //     },
    //     jian: (data) => {
    //         dispatch(createDecrementAction(data))
    //     },
    //     jiaAsync: (data, time) => {
    //         dispatch(createIncrementAsyncAction(data, time))
    //     }
    // }),
    //mapDispatchToProps的简写 reac-redux会
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction
    }
)(CountUI);
