## 1.setState 
setState更新状态的2种写法
    (1). setstate(statechange，[ca11back])------对象式的s etstate
        1.stateChange为状态改变对象(该对象可以体现出状态的更改)
        2.cal7back是可选的回调函数，它在状态更新完毕、界面也更新后(render调用后)才被调用
    (2). setstate(updater ，[cal1back])------函数式的setstate
        1.updater为返回statechange对象的函数。
        2.updater可以接收到state和propso
        3.cal1back是可选的回调函数，它在状态更新、界面也更新后(render调用后)才被调用。
总结:
    1.对象式的setstate是函数式的setstate的简写方式(语法糖)
    2.使用原则:
        (1).如果新状态不依赖于原状态===>使用对象方式(2).如果新状态依赖于原状态===>使用函数方式
        (3).如果需要在setstate()执行后获取最新的状态数据，
        要在第二个callback函数中读取


## 2.lazyLoad 路由组件的lazyLoad
1. 通过React的lazy函数配合import()函数动态加载路由组件===>路由组件代码会被分开打包
    const Login = lazy(()=>import ( '@/pages/Login '))
2. 通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
    <Suspense fa77back={<h1>loading. . ...</h1>}>
        <Switch>
            <Route path=" /xxx" component={Xxxx}/><Redirect to=" / login"/>
        </Switch>
    </Suspense>

## 3. Hooks
1. React Hook/Hooks是什么?
    (1).Hook是React16.8.0版本增加的新特性/新语法
    (2).可以让你在函数组件中使用state以及其他的React特性
2.三个常用的Hook
    (1).State Hook: React.useState()
    (2).Effect Hook: React.useEffect ()
    (3).Ref Hook: React.useRef()
3. State Hook
    (1).State Hook让函数组件也可以有state状态，并进行状态数据的读写操作
    (2).语法: const [xxx， setXxx] = React. useState(initValue)
    (3).useState()说明:
        参数:第一次初始化指定的值在内部作缓存
        返回值:包含2个元素的数组，第1个为内部当前状态值，第2个为更新状态值的函数
    (4).setXxx()2种写法:
        setXxx (newValue):参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
        setXxx(value => newValue): 参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原来的状态值


## 4. Effect Hook
(1). Effect Hook可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
(2). React中的副作用操作:
    发aj ax请求数据获取
    设置订阅/启动定时器:
    手动更改真实DOM
(3).语法和说明:
```javascript
    useEffect(() => {
        //在此可以执行任何带副作用操作
        return () => { 
            //在组件卸载前执行
            //在此做一些收尾工作，比如清除定时器/取消订阅等
        }
    }，[stateValue]) //如果指定的是[]，回调还数只会在第一 次render ()后执行
```
(4).可以把useEffect Hook 看做如下三个函数的组合
    componentDidMount()
    componentDidUpdate()
    componentwil1Unmount ()



## 5. RefHook
(1).RefHook可以在函数组件中存储查找组件内的标签或任意其它数据
(2).语法: const refContainer = useRef()
(3).作用:保存标签对象，功能与React.createRef()一样


## 6. Fragment 碎片 最终会被React编译的时候丢掉
[使用]
<Fragment><Fragment>
<></>

[作用]
可以不用必须有一个真实的DOM根标签了


## 5. Context
理解
-种组件间通信方式,常用于[祖组件]与[后代组件]间通信
使用
1)创建Context容器对象:
const XxxContext = React. cr eateContext ()
2)渲染子组时，外面包裹xxxContext . Pr ovider，通过value属性给后代组件传递数据:
<xxxContext. Provider value= {数据}>
子组件
</xxxContext . Provider>
3)后代组件读取数据:
//第-种方式:仅适用于类组件
static contextType = xxxContext
//声明接收context
this . context //读取context 中的value数据
//第二种方式:函数组件与类组件都可以
<XXxCont ext .Consumer >
value => ( // value就是cont ext中的va lue数据
要显示的内容
</xxxContext .Consumer >

