import React, { Component } from 'react'
// import Demo from "./components/1_setState"
// import Demo from "./components/2_lazyLoad"
// import Demo from "./components/3_hooks"
// import Demo from "./components/5_Context"
// import Demo from "./components/6_optimize"
// import Demo from "./components/7_renderProps"
import Demo from "./components/8_ErrorBoundary/parent"
import "./app.css"

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="title">测试demo</div>
                <Demo a = {1}/>
                {/* <div className="title">lazyLoad</div>
                <LazyLoad/>
                <div className="title">hooks</div>
                <Hook/>
                <div className="title">Context</div>
                <MyContext/>
                <div className="title">optimize</div>
                <Optimize/>
                <div className="title">RenderProps</div>
                <RenderProps/>
                <div className="title">ErrorBoundary</div>
                <ErrorBoundary/> */}
                
            </div>
        )
    }
}
