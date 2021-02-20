import React, { Component } from 'react'

export default class Footer extends Component {
    handleCheck = event => {
        this.props.selectAllTodo(event.target.checked);
    }
    render() {
        const {todos, emptyAllCheckedTodos} = this.props;
        let alllen = todos.length;
        let doneListLen = todos.filter(todo => todo.done).length;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheck} checked={doneListLen && alllen && doneListLen === alllen} />
                </label>
                <span>
                    <span>已完成{doneListLen}</span>
                    <span>/</span>
                    <span>全部{alllen}</span>
                </span>
                <button className="btn btn-danger" style={{display: "inline"}} onClick={emptyAllCheckedTodos}>清除已完成任务</button>
            </div>
        )
    }
}
