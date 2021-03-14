import React, { Component } from "react";
import Item from "../Item"
import PropTypes from "prop-types";

export default class List extends Component {
  // 对接收的props进行判断
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired
  }
  render() {
    const {updateTodo, hanldeDelete} = this.props;
    return (
      <ul>
          {
              this.props.todos.map(todo => {
                  return <Item {...todo} key={todo.id} updateTodo={updateTodo} hanldeDelete={hanldeDelete}/>
              })
          }
      </ul>
    );
  }
}
