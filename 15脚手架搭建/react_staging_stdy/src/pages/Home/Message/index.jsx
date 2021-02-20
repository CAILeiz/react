import React, { Component } from "react";
import Detail from "./Detail";
import {Link, Route} from "react-router-dom"

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
    ],
  };
  // push查看
  pushShow = (id, title) => {
    // 函数式编程之params传递参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)
    
    // 函数式编程之query传递参数
    // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)
    
    // 函数式编程之state传递参数
    this.props.history.push(`/home/message/detail`, {id, title})
  }
  // replace查看
  replaceShow = (id, title) => {
    // 函数式编程之params传递参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)

    // 函数式编程之query传递参数
    // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)
    
    // 函数式编程之state传递参数
    this.props.history.replace(`/home/message/detail`, {id, title})
  }
  // 路由回退
  goBack = () => {
    this.props.history.goBack();
  }
  // 路由前进
  goForward = () => {
    this.props.history.goForward();
  }
  // 路由回退两步
  go = () => {
    this.props.history.go(-2);
  }
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((message) => {
            return (
              <li key={message.id}>
                  {/* 向路由组件传递params参数 url上面传递参数*/}
                  {/* <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link> */}

                  {/* 向路由组件传递search参数*/}
                  {/* <Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link> */}

                  {/* 向路由组件传递state参数,传递的是一个对象*/}
                  <Link replace to={{pathname: "/home/message/detail", state: {id: message.id, title: message.title}}}>{message.title}</Link>
                  &nbsp; <button onClick={() => this.pushShow(message.id, message.title)}>push查看</button>
                  &nbsp; <button onClick={() => this.replaceShow(message.id, message.title)}>replace查看</button>
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 声明接受params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

        {/* params参数无需声明接受,正常注册路由即可 */}
        {/* <Route path="/home/message/detail" component={Detail}/> */}

        {/* params参数无需声明接受,正常注册路由即可 */}
        <Route path="/home/message/detail" component={Detail}/>
        &nbsp; <button onClick={() => this.goBack()}>回退</button>
        &nbsp; <button onClick={() => this.goForward()}>前进</button>
        &nbsp; <button onClick={() => this.go()}>go</button>
      </div>
    );
  }
}
