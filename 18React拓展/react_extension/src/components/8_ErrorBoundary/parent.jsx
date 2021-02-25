import React, { Component } from 'react'
import Child from "./Child"

export default class parent extends Component {
    state = {
        hasError: ""
    }
    static getDerivedStateFromError(error) {
        console.log("@@", error);
        return {hasError: error}
    }
    // componentDidCatch所有的错误都会
    componentDidCatch(error) {
        console.log("componentDidCatch Error", error);
        console.log("此处统计错误,反馈给服务器,用于通知编码人员进行bug的解决");
    }
    render() {
        const {hasError} = this.state;
        return (
            <div>
                <h2>我是parent组件</h2>
                {
                    hasError ? <h2>当前网络不稳定,请稍后重试</h2> : <Child/>
                }
            </div>
        )
    }
}
