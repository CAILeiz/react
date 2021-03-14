import React, { Component } from 'react'
import PropTypes from "prop-types";
export default class Header extends Component {
    // 对接收的props进行判断
    static propTypes = {
        addTodo: PropTypes.func.isRequired 
    }
    // 鼠标回车之后给App组件传参用于新增todo
    handleKeyUp = (event) => {
        let {target, keyCode} = event;
        console.log(keyCode);
        if(keyCode !== 13) return;
        if(target.value.trim() === "") {
            alert("输入todo不能为空");
            return;
        }
        let newTodo = {id: Date.now(), name: target.value, done: false};    
        this.props.addTodo(newTodo);
        target.value = "";
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称,按回车键确认" onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}
