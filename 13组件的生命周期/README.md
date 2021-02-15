## 1.生命周期的理解
1. 组件从创建到死亡它会经历一些特定的阶段。
2. React组件中包含一系列勾子函数(生命周期回调函数)，会在特定的时刻调用。
3. 我们在定义组件时，会在特定的生命周期回调函数中做特定的工作。
## 2. 旧生命周期执行顺序
1. 组件挂载时
Count---constructor
Count---componentWillMount [组件挂载之前调用]
Count---render [组件进行渲染]
Count---componentDidMount [组件挂载完毕]
2. 组件卸载时 调用 ReactDOM.unmountComponentAtNode(document.getElementById("test"));
调用之后会触发
Count---componentWillUnmount [组件卸载之前调用]

3. 组件更新时 分为三种 
[第一种] setState({})之后 
[如果shouldComponentUpdate钩子函数返回true]
Count---shouldComponentUpdate  [控制组件更新的""阀门",只能returnt真或者假(true/false)]
Count---componentWillUpdate [组件将要被更新]
Count---render [组件将要渲染]
Count---componentDidUpdate [组件更新完毕]
[如果shouldComponentUpdate钩子函数返回false]
Count---shouldComponentUpdate

[第二种] forceUpdate()强制更新
Count---componentWillUpdate [组件将要被更新]
Count---render [组件将要渲染]
Count---componentDidUpdate [组件更新完毕]

[第三种] 父组件render componentWillReceiveProps
B---componentWillReceiveProps
B---shouldComponentUpdate
B---componentWillUpdate
B---componentDidUpdate   
## 3.生命周期总结
生命周期的三个阶段(旧)
1.初始化阶段:由ReactDOM.render触发---初次渲染
    1. constructor()
    2. componentWillMount()
    3. render()
    4. componentDidMount() [常用] 
    ===> 一般在这个钩子中做一些初始化的事情,例如开启定时器,发送网络请求,订阅消息
2.更新阶段:由组件内部 this.setSate(或父组件重新render触发)
    1. shouldComponentUpdate()
    2. componentWillUpdate
    3. render ===> [必须使用的一个]
    4. componentDidUpdate()
3.卸载组件:由ReactDOM.unmountComponentAtNode()触发
    1.componentWillUnmount() [常用]
    ===> 一般在这个钩子中做一些初始化的事情,例如关闭定时器,取消 订阅消息

## 4.新生命周期
1. [废弃]componentWillMount componentWillUpdate componentWillReceiveProps这三个钩子将在未来(18.x)废弃 要使用需要在加UNSAFE_前缀
2. [新增] 
a) getSnapshotBeforeUpdate(在更新完成之前触发 return快照值或者是null 将传递给componentDidUpdate(preProps, preState, snapshot)) 例如获取滚动条滚动值实现滚动的时候滚动条不滚动
b) static getDerivedStateFromProps
// 从props得到一个衍生的state 使用场景极其罕见 使用概率也极低 state的值在任何时候都取决于props
// 派生状态会导致代码yong余 并使组件难以维护
// getDerivedStateFromProps返回值要么是null要么是state对象
static getDerivedStateFromProps(props, state) {
    console.log("Count---getDerivedStateFromProps", props, state);
    return null; 
}

## 5.重要的勾子
1. render:初始化渲染或更新渲染调用
2. componentDidMount:开启监听,发送ajax请求
3. componentWillUnmount:做一些收尾工作,如:清理定时器
## 6.即将废弃的勾子
1. componentWillMounte
2. componentWillReceivePropse
3. componentWillupdate
现在俑用会出现警告，下一个大版本需要机上UNSAFE_前缀才能使用，以后可能会被彻底废弃，不建议使用。




