import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
// 创建并暴露App组件
export default class App extends Component {
  // 初始化状态
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: false },
    ],
  };
  // addTodo添加一个todo
  addTodo = (todoObj) => {
    let newTodos = [todoObj, ...this.state.todos];
    this.setState({ todos: newTodos });
  };
  // 根据子组件list传递的id更新Todo
  updateTodo = (id, done) => {
    console.log(id, done);
    let newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done };
      } else {
        return todo;
      }
    });
    this.setState({ todos: newTodos });
  };
  // 删除一个todo
  hanldeDelete = (id) => {
      if(window.confirm("确定删除吗?")) {
        let newTodos = this.state.todos.filter((todo) => todo.id !== id);
        this.setState({ todos: newTodos });
      }
  };
  // 勾选全部任务
  selectAllTodo = (done) => {
    let newTodos = this.state.todos.map((todo) => {
        return {...todo, done};
    });
    console.log("newTodos", newTodos);
    this.setState({ todos: newTodos });
  };
  // 清除全部已完成任务
  emptyAllCheckedTodos = () => {
    let newTodos = this.state.todos.filter((todo) => !todo.done);
    this.setState({ todos: newTodos });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header todos={todos} addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            hanldeDelete={this.hanldeDelete}
          />
          <Footer
            todos={todos}
            selectAllTodo={this.selectAllTodo}
            emptyAllCheckedTodos={this.emptyAllCheckedTodos}
          />
        </div>
      </div>
    );
  }
}
