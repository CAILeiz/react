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
        
      </div>
    );
  }
}
