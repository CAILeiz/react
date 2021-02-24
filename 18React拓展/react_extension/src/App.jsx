import React, { Component } from 'react'
import Demo from "./components/1_setState"
import LazyLoad from "./components/2_lazyLoad"
import Hook from "./components/3_hooks"
import MyContext from "./components/5_Context"
import Optimize from "./components/6_optimize"
import RenderProps from "./components/7_renderProps"
import ErrorBoundary from "./components/8_ErrorBoundary/parent"
import "./app.css"

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="title">setState</div>
                <Demo a = {1}/>
                <div className="title">lazyLoad</div>
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
                <ErrorBoundary/>
                
            </div>
        )
    }
}
