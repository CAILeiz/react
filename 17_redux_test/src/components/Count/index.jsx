import React, { Component } from 'react'

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
        this.props.jia(value * 1);
    }
    // 减法
    decrement = () => {
        const { value } = this.selectNumber;
        this.props.jian(value * 1);
    }
    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber;
        const {count} = this.props;
        if(count % 2 !== 0) {
            this.props.jia(value * 1);
        }
    }
    // 异步加
    incrementAsync = () => {
        const { value } = this.selectNumber;
        this.props.jiaAsync(value * 1, 500);
    }
    render() {
        console.log("CountUI组件", this.props);
        return (
            <div>
                {/* {store.getState() 获取store中的状态 */}
                <h1>当前求和为{this.props.count}</h1>
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
