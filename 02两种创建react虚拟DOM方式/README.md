## 两种创建react虚拟DOM方式
1. 使用jsx语法[重点] JSX编译原理: JSX通过babel转换为createELement的语法
const vNode = (
    <h1 id="title">
        <span>hello</span>  
    </h1>
);
2. [使用createElement创建虚拟DOM]
const vNode = React.createELement("h1", {id: "title"}, 
    React.createELement("span", {}, "hello")
);
[语法] : createELement(标签名, 属性[id等], children)

