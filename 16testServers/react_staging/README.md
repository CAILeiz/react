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
    1. 后端路由: value是function, 用来处理客户端提交的请求
    2. 注册路由 router