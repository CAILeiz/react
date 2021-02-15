## 虚拟DOM元素
总结关于虚批DOM:
    1.本质是0bject类型的对象(一般对象)
    2.虚拟DON比较'轻'，真实DOM比较'重'，因为虚拟DOM是React内部使用的，无需真实DOM上那么多属性
    3.虚拟DOM最终会被React转化为真实DOM,呈现在页面