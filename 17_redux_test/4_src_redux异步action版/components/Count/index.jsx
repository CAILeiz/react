import React, { Component } from 'react'
// 引入store, 用于获取redux中保存状态
import store from "../../redux/store"
// 引入actionCreator, 专门用于创建action对象
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from "../../redux/count_action"

export default class Count extends Component {
    state = {carName: "奔驰c63"}
    // componentDidMount() {
    //     // store.subscribe(fn) 监测redux中状态的变化,只要状态发生变化,就调用render
    //     store.subscribe(() => {
    //         // this.setState会触发重新render
    //         this.setState({});
    //     });
    // }
    // 加法
    increment = () => {
        const { value } = this.selectNumber;
        //  store.dispatch({type: xx, data: xxx})
        store.dispatch(createIncrementAction(value))
    }
    // 减法
    decrement = () => {
        const { value } = this.selectNumber;
        store.dispatch(createDecrementAction(value))
    }
    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber;
        const count = store.getState();
        if(count % 2 !== 0) {
            store.dispatch(createIncrementAction(value))
        }
    }
    // 异步加
    incrementAsync = () => {
        const { value } = this.selectNumber;
        setTimeout(() => {
            store.dispatch(createIncrementAsyncAction(value))
        }, 500);
    }
    render() {
        console.log(store);
        return (
            <div>
                {/* {store.getState() 获取store中的状态 */}
                <h1>当前求和为{store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}
