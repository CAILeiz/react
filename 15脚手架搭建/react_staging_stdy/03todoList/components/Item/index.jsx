import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Item extends Component {
  // 对接收的props进行判断
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
  };
  state = { mouse: false };
  // 鼠标移入事件
  handleMouse(flag) {
    return () => {
      this.setState({ mouse: flag });
    };
  }
  // checkbox选择事件
  handleCheck = (id) => {
    return (event) => {
      console.log(id, event.target.checked);
      this.props.updateTodo(id, event.target.checked);
    };
  };
  // 删除一个todo
  hanldeDelete = (id) => {
    this.props.hanldeDelete(id);
  } 
  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "inline" : "none" }}
          onClick={() => {this.hanldeDelete(id)}}
        >
          删除
        </button>
      </li>
    );
  }
}
// <input type="checkbox" checked={done}/>
// input设置checked之后就不能改了 设置了onChange之后才能改
// defaultChecked
