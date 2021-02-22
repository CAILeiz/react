## 1.字符串形式的ref 尽量避免使用
用法: 
在节点上写一个ref的标签属性,之后使用 this.refs["属性节点即可"]
```javascript
<input type="text" ref="input1" placeholder="点击按钮提示数据" />
showData = () => {
    console.log(this);
    const { input1 } = this.refs;
    alert(input1.value); 
}
```
[注意] 官网不推荐使用字符串形式的ref, 因为会影响react执行的效率

## 2.回调函数形式的ref 开发一般都使用内联的ref回调函数
用法:
在节点上添加一个ref的标签属性,ref的内容是{}包起来的函数使用箭头函数 currentNode指的是当前DOM元素
```javascript
<input type="text" ref={currentNode => this.input1 = currentNode} placeholder="点击按钮提示数据" />
showData = () => {
    console.log(this);
    const { input1 } = this;
    alert(input1.value); 
}
```
[总结] react会自动去调用ref的回调函数, 还把当前节点当做实参传递进去, 之后就可以将当前节点赋值到该实例对象, 进行this["xxx"]获取dom元素属性的值

## 3.回调ref执行次数的问题
render会在第一次刷新的时候调用一次
如果采用的函数直接写在ref中时, state改变触发render函数的时候ref会执行两次第一次执行时会传一个null清空保证是最新的ref回调函数
第二次执行会传当前的实例;
如果采用的是class类绑定函数的形式 在更新state的时候就不会触发该回调函数了


## 4.createRef形式 官网最为推荐的
```javascript
首先创建一个person实例属性 
class XXX extends React.Component {
    myRef = React.createRef();  // myRef对象中有一个current存储着当前DOM
    // myRef对象如下:
    //     current: input
    showData = () => {
        alert(this.myRef.current.value);
    }
    ...
    render() {
        return (
            <div>
                <input type="text" ref={this.myRef} placeholder="点击按钮提示数据" /> &nbsp;
                <button onClick={this.showData}>点我提示左侧的数据</button> &nbsp;
            </div>
        )
    }  
}
```    





