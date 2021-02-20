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
