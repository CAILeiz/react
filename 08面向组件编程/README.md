## 函数式组件跟类组件
1. 函数式组件
<script type="text/babel">
    // 创建函数式组件
    function MyComponent() {
    console.log(this); // 此处的this是undefined 因为babel之后启用了严格模式
    return (
        <h2>我是函数式的组件[适用于简单的组件]</h2>
    )
    }
    ReactDOM.render(<MyComponent />, document.getElementById("test"));
</script>
<!-- 
执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么?
    1.React解析组件标签,找到了MyComponent组件。
    ⒉发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOA，随后呈现在页面中。
-->

2. 类式组件
// 创建函数式组件
<script type="text/babel">
class MyComponent extends React.Component{
        render() {
        // render是放在哪里的? = 类[MyComponent]的原型对象上,供实例使用
        console.log("render中的this: ", this);
        // render中的this是谁呢 ---> MyComponent的实例对象 <==>  MyComponent组件实例对象
        // 一说组件实例对象就是类式组件
        return (
            <h2>我是类式的组[适用于复杂类型的组件]</h2>
        )
    }
}
ReactDOM.render(<MyComponent />, document.getElementById("test"));
</script>
<!-- 
执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么?
1.React解析组件标签,找到了MyComponent组件。
⒉发现组件是使用类定义的，随后new出来该类的实例，并通过实例调用原型上的render方法
3. 将render返回的虚拟DOM渲染成真实的DOM
-->