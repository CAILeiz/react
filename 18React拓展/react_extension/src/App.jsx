import React, { Component } from 'react'
import Demo from "./components/1_setState"
import LazyLoad from "./components/2_lazyLoad"
import Hook from "./components/3_hooks"
import "./app.css"

export default class App extends Component {
    render() {
        return (
            <div>
                <Demo a = {1}/>
                <hr/>
                <LazyLoad/>
                <hr/>
                <Hook/>
            </div>
        )
    }
}
