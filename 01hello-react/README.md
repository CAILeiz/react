# react hello 实战
1. 引入 react 核心库 可以使用用 React 对象
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
2. 引入 react-dom 用于支持 react 操作 dom 可以使用用 ReactDOM 对象
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"crossorigin></script>
3. 引入 babel 用于将 jsx 转为 js
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    const VDOM = <h1>hello</h1>;
    ReactDOM.render(VDOM, document.getElementById("test"));
</script>
