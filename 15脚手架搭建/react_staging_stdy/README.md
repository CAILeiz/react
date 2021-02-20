## react配置代理
1. 第一种方式在packjson.js中配置"proxy"[本质上是http-proxy-middleware的简写]
"proxy": "http://localhost:5000"
[说明]
1. 优点:配置简单，前端请求资源时可以不加任何前缀。
2. 缺点:不能配置多个代理。
3. 工作方式:[上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000(优先匹配前端资源)]
 
2. 第二种方式 在src,目录下面新增一个setupProxy.js文件[react会自动找到这个文件启动代理] 文件内容如下
```javascript
const proxy = require("http-proxy-middleware");
module.exports = function(app) {
    app.use(
        proxy("/api1", { // 遇见/api1前缀的请求,就会触发该代理配置
            target: "http://localhost:5000", // 请求转发给谁
            // changeOrigin: true, // 控制服务器收到的请求头中Host值, 如果是false请求头中收到的是未代理的Host值及localhost:3000 如果为true localhost:5000
            pathRewrite: {"^/api1": ""} // 重写请求路径 去除请求前缀,保证交给后台服务器是正常请求地址(必须配置)
        }),
        proxy("/api2", {
            target: "http://localhost:5001",
            changeOrigin: true,
            pathRewrite: {"^/api2": ""}
        })
    )
}
```
[说明]
1. 优点: 可以配置多个代理, 可以灵活的控制请求是否走代理
2. 缺点: 配置繁琐,前端请求资源时必须加前缀

## 1.设计状态时要考虑全面,例如带有网络请求的组件,要考虑请求失败怎么办

## 2.连续解构赋值 + 重命名
获取用户输入(连续解构赋值 + 重命名)
const {keyWordElement: {value: keyword}} = this;
console.log(keyword);


## 3.List展示的内容
1. users
2. first初始提示数据
3. loading 数据加载过程
4. err 请求错误展示信息


## 4.消息订阅-发布机制
1. 工具库: PubSubJs
2. 安装: npm install pubsub-js --save
3. 使用:
    1)import PubSubJs from "pubsub-js"
    2)const token = PubSubJs.subscribe("delete", (data) => {}) 订阅
    3)PubSubJs.publish("delete", data) 发布消息
    4)PubSubJs.unsubscribe(token) 取消发布订阅
[或者]
1. 先订阅，再发布（理解:有一种隔空对话的感觉)
2. 适用于任意组件间通信
3. 要在组件的componentwi1lUnmount中取消订阅


## 5.Fetch发送网络请求
1. fetch: 原生函数，不再使用XmlHttpRequest对象提交ajax请求
2. 老版本浏览器可能不支持
eg: 
```javascript
try {
    const response = await fetch(`https://api.github.com/search/users?q=${keyword}`);
    const data = await response.json();
    console.log(data.items);
} catch (error) {
    console.log(error);
}
```

## 6.React路由相关知识点理解
6.1. SPA的理解
1. 单页Web应用(single page web application，SPA)。
2. [整个应用只有一个完整的页面。]
3. [点击页面中的链接不会刷新页面，只会做页面的局部更新]。
4. 数据都需要通过ajax请求获取并在前端异步展现。
6.2 路由的理解
1. 什么是路由?
    1. 一个路由就是一个映射关系(key: value)
    2. key为路径 value可能是一个function或component
2. 路由分类
    1. 后端路由
    1)理解: value 是function,用来处理客户端提交的请求。
    2)注册路由: router.get(path, function(req, resl)
    3)工作过程: 当node接收到一个请求时，根据请求路径找到匹配的路由，调用路
    由中的函数来处理请求，返回响应数据
    2. 前端路由: 
    1)浏览器端路由, value 是component,用于展示页面内容。
    2)注册路由: <Route path= "/test" component={Test}>
    3)工作过程: 当浏览器的path变为/test时,当前路由组件就会变为Test组件  
3. react-router的理解
    1. react的一个插件库
    2. 专门用来实现一个SPA应用
    3. 基于React的项目都会用到此库

## 前端路由原理
1. 使用BOM身上的history 进行push replace go forward
通过监听path的变化 渲染组件
2. 使用hash 进行路由变化

## 一 路由的基本使用
    1. 明确好界面中的导航区、展示区
    2. 导航区的a标签改为Link标签
        <Link to="/xxxXx" >Demo</Link>
    3. 展示区写Route标签进行路径的匹配
        <Route path= '/ xxxx' component={Demo}/>
    4. <App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>

## 二 路由组件和一般组件************************
    1. 写法不同
        一般组件: <Demo/>
        路由组件: <Route path="/about" component={About}/>
    2. 存放位置不同
        一般组件: components
        路由组件: pages
    3. 接收到的props不同
        一般组件: 写组件标签时传递了什么,就能接收到什么
        路由组件: 接收到三个固定的属性
                history:
                    go: ƒ go(n)
                    goBack: ƒ goBack()
                    goForward: ƒ goForward()
                    push: ƒ push(path, state)
                    replace: ƒ replace(path, state)
                location:
                    pathname: "/about"
                    search: ""
                    state: undefined
                match:
                    params: {}
                    path: "/about"
                    url: "/about"

## 三 NavLink是Link的升级版 点击之后会默认加一个activeClassName 默认是active 可以设置单独的高亮类名


## 四 NavLink 与封装NavLink
1. NavLink可以实现路由链接的高亮，通过activeclassName指定样式名
2. 标签体内容是一个特殊的标签属性,[在props中的children中存放着]
3. 通过this.props.children可以获取标签体内容[组件标签体内容]


## 五 Switch的使用
1. 通常情况下，path和component是一一对应的关系。
2. Switch可以提高路由匹配效率(单一匹配)。


## 六 解决多级路径刷新页面样式丢失的问题
1. public/index.htm1 中引入样式时不写./ 写/（常用)
2. public/index.html 中引入样式时不写﹒/写%PUBLIC_URL%（常用)
3. 使用HashRouter(不常用)


## 七 路由的严格匹配与模糊匹配
1.默认使用的是模糊匹配（简单记:【输入的路径】必须包含要【匹配的路径】，且顺序要
一致)
2.开启严格匹配:<Route exact={true} path="/about" component={About}/>
3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由



## 八 Redirect的使用
1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
2. 具体编码:
<Switch>
    <Route path="/about" component={About}/>
    <Route path="/home" component={Home}/>
    <Redirect to="/about" /> 匹配不到前面的path 就会重定向到某一设定的路由
</Switch>

## 九 嵌套路由
1. 注册子路由时要写上父路由的path值
2. 路由的匹配是按照注册路由的顺序进行的

## 十 向路由组件传递参数
[前言]
key=value&key=value
[这种编码方式叫urlencoded]
1. params参数
    路由链接(携带参数): <Link to= '/demo/test/tom/18'}>详情</Link>
    注册路由(声明接收): <Route path="/demo/test/:name/:age" component={Test}/>
    接收参数: this.props.match.params
    eg: 
    [http://localhost:3000/home/message/detail/01/%E6%B6%88%E6%81%AF1]
2. 传递params参数
    路由链接(携带参数): <Link to='/demo/test?name=tom&age=18'}>详情</Link>
    注册路由(无需声明，正常注册即可): <Route path="/demo/test" component={Test}/>
    接收参数: this.props.location.search
    [备注:获取到的search是urlencoded编码字符串，需要借助querystring解析]
    eg: 
    [http://localhost:3000/home/message/detail/?id=03&title=%E6%B6%88%E6%81%AF3]
3. 传递state参数 (url中不会显示)
    路由链接(携带参数): <Link to={{path:"/demo/test",state:{name:"tom",age:18}}}>详情</Link>
    注册路由(无需声明，正常注册即可): <Route path="/demo/test" component={Test}/>
    接收参数: this.props.1ocation.state
    备注:刷新也可以保留住参数


## 十一 路由replace模式
在路由栈中替换路由
push是在路由栈中压栈


## 十二 编程式路由导航
借助this.props.history对象上的API对操作路由跳转、前进、后退
    -this.props.history.push()
    -this.props.history.replace()
    -this.props.history.goBack( )
    -this.props.history.goForward()
    -this.props.history.go()

## 十三 withRouter 
1. withRouter可以加工一般组件,让一般组件具备路由组件所特有的API 实际上就是给this.props中添加history loaction match等路由组件的属性
2. withRouter的返回值是一个新组件


## 十四 BrowserRouter与HashRouter的区别
1. 底层原理不一样:
    BrowserRouter使用的是H5的history API,不兼容IE9及以下版本。
    HashRouter使用的是URL的哈希值。
2. url表现形式不一样
    BrowserRouter的路径中没有#,例如: localhost : 3000/demo/test
    HashRouter的路径包含# ,例如: localhost : 3000/#/ demo/test
3. 刷新后对路由state参数的影响
    (1) . BrowserRouter没有任何影响，因为state保 存在history对象中。
    (2). HashRouter刷新后会导致路由state参数的丢失。
4. 备注: HashRouter 可以用于解决一些路径错 误相关的问题。
