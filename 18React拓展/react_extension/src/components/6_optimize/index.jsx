import React, { PureComponent } from 'react'

export default class Optimize extends PureComponent {
    state = {
        carName: "奔驰c36"
    }
    changeCar = () => {
        // this.setState({carName: "奔驰c36"})
        const obj = this.state;
        obj.carName = "迈巴赫";
        this.setState(obj)
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(this.props, this.state);
    //     console.log(nextProps, nextState);
    //     return this.state.carName !== nextState.carName;
    // }
    render() {
        console.log("Parent---render");
        return (
            <div className="parent">
                <h2>我是父组件</h2>
                <h4>父组件中的车是 {this.state.carName}</h4>
                <button onClick={this.changeCar}>点我换车</button>
                <Child carName={this.state.carName}/>
            </div>
        )
    }
}


class Child extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(this.props, this.state);
    //     console.log(nextProps, nextState);
    //     return this.props.carName !== nextProps.carName;
    // }
    render() {
        console.log("Child---render");
        return (
            <div className="child">
                <h2>我是子组件</h2>
            </div>
        )
    }
}

