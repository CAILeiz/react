## 生命周期的理解
1. 组件从创建到死亡它会经历一些特定的阶段。
2. React组件中包含一系列勾子函数(生命周期回调函数)，会在特定的时刻调用。
3. 我们在定义组件时，会在特定的生命周期回调函数中做特定的工作。



## 旧生命周期执行顺序
1. 组件挂载时
Count---constructor
Count---componentWillMount [组件挂载之前调用]
Count---render [组件进行渲染]
Count---componentDidMount [组件挂载完毕]

2. 组件卸载时 调用 ReactDOM.unmountComponentAtNode(document.getElementById("test"));
调用之后会触发
Count---componentWillUnmount [组件卸载之前调用]


2. 组件更新时 分为三种 
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


