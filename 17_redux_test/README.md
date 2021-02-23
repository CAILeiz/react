## 1.求和案例_redux精简版
(1).去除Count组件自身的状态
(2).src下建立:
    -src
        -redux
            -store.js
            -count_reducer.js
(3).store.js:
    1).引入redux中的createStore函数，创建一个store
    2).createStore调用时要传入一个为其服务的reducer
    3).记得暴露store对象
(4).count_reducer.js:
    1).reducer的本质是一个函数，接收:preState,action，返回加工后的状态 action是{type: xxx, data: xxx}
    2).reducer有两个作用:初始化状态，加工状态
    3).reducer被第一次调用时，是store自动触发的，
        传递的preState是undefined, 
        传递的action中的是{type: "@@REDUX/INIT_a.2.b.4"}
(5).在index.js中监测store中状态的改变，一旦发生改变重新渲染<App/>
[备注:redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。]
```javascript
import store from "./redux/store";
ReactDOM.render(<App />, document.getElementById("root"));
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
```

## 2.求和案例_redux完整版新增文件:
1. count_action.js专门用于创建action对象
2. constant.js放置容易写错的type值


## 3.求和案例_redux异步action版 (异步action就是指action返回的是一个函数,函数内等异步执行完毕之后再执行action同步函数)
(1).明确:延迟的动作不想交给组件自身，想交给action
(2).何时需要异步action:想要对状态进行操作，但是具体的数据靠异步任务返回。
(3).具体编码:
    1).yarn add redux-thunk，并配置在store中
    2).创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务
    3).异步任务有结果后，分发一个同步的action去真正操作数据。
(4).备注:异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action。


## 4.求和案例_react-redux基本使用
(1).明确两个概念:
    1).UI组件不能使用任何redux的api，只负责页面的呈现、交互等。
    2).容器组件:负责和redux通信，将结果交给UI组件。
(2).如何创建一个容器组件--靠react-redux的connect函数
connect的第一个参数接收的是两个函数
connect(mapStateToProps,mapDispatchToProps)(UT组件)
    -mapstateToProps:映射状态，返回值是一个对象
    -mapDispatchToProps:映射操作状态的方法，返回值是一个对象
(3).备注1:容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
(4).备注2: mapDispatchToProps也可以是一个对象,react-redux会自动dispatch


## 5.求和案例_react-redux优化
(1).容器组件和UI组件混成一个文件
(2).无需自己给容器组件传递store，给<App/>包裹一个<Provider store={store}>即可。
(3).使用了react-redux后也不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作。
(4).mapDispatchToProps也可以简单的写成一个对象
(5).一个组件要和redux“打交道”要经过那几步?
    (1).定义好UI组件---不暴露
    (2).引入connect生成一个容器组件，并暴露，写法如下:connect(
        state =>({key :value}), // 映射状态
        {key :xxxxxAction} // 映射操作状态的方法
    )(UI组件)
    (3).在UI组件中通过this.props.xxxxxxx读取和操作状态

## 6. 纯函数和高阶函数
1. 纯函数
    1.一类特别的函数:只要是同样的输入(实参)，必定得到同样的输出(返回)
    2．必须遵守以下一些约束
        1)不得改写参数数据
        2)不会产生任何副作用，例如网络请求，输入和输出设备3)不能调用Date.now()或者Math.random()等不纯的方法
    3. [redux的reducer函数必须是一个纯函数]
2. 高阶函数
    1．理解:一类特别的函数
        1)情况1:参数是函数
        2)情况2:返回是函数
    2.常见的高阶函数:
        1)定时器设置函数
        2)数组的 forEach()/map()/filter()/reduce(/find(/bind()
        3) promise
        4)react-redux中的connect函数3.作用:能实现更加动态,更加可扩展的功能


## 7.求和案例_react-redux开发者工具的使用
(1).yarn add redux-devtools-extension
(2).store中进行配置
import {composewithDevTools} from 'redux-devtools-extension'
const store = createStore(allReducer ,composewithDevTools(applyNiddleware(thunk))

## 8.求和案例_react-redux最终版
(1).所有变量名字要规范，尽量触发对象的简写形式。
(2).reducers文件夹中，编写index.js专门用于汇总并暴露所有的reducer


