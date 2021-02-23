import React from "react";
import ReactDOM from "react-dom";

export default class index extends React.Component {
  state = {
    count: 0,
  };
  myRef = React.createRef();
  add = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };
  show = () => {
      alert(this.myRef.current.value)
  }
  unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((state) => ({ count: state.count + 1 }));
    }, 1000);
  }
  render() {
    return (
      <div>
        <input type="text" name="" id="" ref={this.myRef} />
        <h2>当前求和为: {this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.unmount}>点我卸载组件</button>
        <button onClick={this.show}>点我提示input数据</button>
      </div>
    );
  }
}

// export default function Add() {
//     const [count, setCount] = React.useState(0)
//     const [name, setName] = React.useState("Tom")
//     const myRef = React.useRef()
//     let timer = null;
//     function add() {
//         // 第一种写法
//         setCount(count + 1)
//         // 第二种写法
//         // setCount(count => count + 1)
//     }
//     function changeName() {
//         setName("daleizi")
//     }
//     function show() {
//         alert(myRef.current.value)
//     }
//     // React.useEffect相当于componentDidMount和componentDidUpdate, 第二个参数传的是一个数据,是监测哪个state,如果不传值都监测
//     // useEffect第一个函数返回一个函数就是componentWillUnmount
//     React.useEffect(() => {
//         timer = setInterval(() => {
//             setCount(count => count +1)
//         }, 1000);
//         return () => {
//             clearInterval(timer);
//         }
//     }, [])
//     function unmount() {
//         ReactDOM.unmountComponentAtNode(document.getElementById("root"));
//     }
//     return (
//         <div>
//             <input type="text" name="" id="" ref={myRef}/>
//             <h2>当前求和为: {count}</h2>
//             <h2>我的名字是: {name}</h2>
//             <button onClick={add}>点我+1</button>
//             <button onClick={changeName}>点我改名</button>
//             <button onClick={unmount}>点我卸载组件</button>
//             <button onClick={show}>点我提示input数据</button>
//         </div>
//     )
// }
