import React, { Component } from "react";
import "./index.css"

// const myContext = React.createContext();
const myContext = React.createContext();

console.log(myContext);
const { Provider, Consumer } = myContext;
export default class A extends Component {
  state = {
    userName: "daleizi",
    age: 18,
  };
  render() {
    const { userName, age } = this.state;
    return (
      <div className="parent">
        <h3>我是A组件</h3>
        <h4>我是A组件的用户名: {this.state.userName}</h4>
        <Provider value={{ userName, age }}>
          <B />
        </Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div  className="child">
        <h3>我是B组件</h3>
        <C />
      </div>
    );
  }
}

// class C extends Component {
//   // 声明接受context
//   static contextType = myContext;
//   render() {
//     console.log(this);
//     const { userName, age } = this.context;
//     return (
//       <div>
//         <h3>我是C组件</h3>
//         <h4>
//           我是A组件接收的用户名: {userName} 年龄: {age}
//         </h4>
//       </div>
//     );
//   }
// }

// function C() {
//   return (
//       <div className="grand">
//         <h3>我是C组件</h3>
//         <h4>
//           我是A组件接收的用户名:
//           <Consumer>
//             {
//               value => {
//                 return `${value.userName} 年龄是${value.age}`
//               }
//             }
//           </Consumer>
//         </h4>
//       </div>
//   )
// }

function C() {
  return (
    <div className="grand">
      <h3>我是C组件</h3>
      <Consumer>
        {
          value => {
            console.log(value);
          }
        }
      </Consumer>
    </div>
  )
}