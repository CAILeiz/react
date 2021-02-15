## props是只读的

## 几乎在开发中不会使用构造类中的构造器

## 函数式组件玩不了state和refs(因为函数没有自己的this) 但是函数可以接收参数 所以可以玩props


## 总结
1. props的基本使用: 
通过标签属性进行传值 
ReactDOM.render(<Person name="tom" age={18} sex="男" />, document.getElementById("text"));
如果传递多个值, 使用...的方式
ReactDOM.render(<Person {...p}/>, document.getElementById("test"));

2. 对标签属性进行限制, 需要引入prop-type.js,会暴露一个PropTypes对象
// 对标签属性进行类型,必要性的限制
Person.propTypes = {
    name: PropTypes.string.isRequired, // 限制name必传且为字符串
    sex: PropTypes.string, // 限制sex为字符串
    age: PropTypes.number, // 限制age为number类型的
    speck: PropTypes.func // 限制speck为函数
}

// 指定默认标签属性值
Person.defaultProps = {
    sex: "男", // sex默认值为男
    age: 18 // age默认值为18
}

3. 
