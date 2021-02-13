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