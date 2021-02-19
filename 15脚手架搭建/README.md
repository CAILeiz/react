##  1.React脚手架
1. xxx脚手架:用来帮助程序员快速创建一个基于xxx库的模板项目
    1. 包含了所有需要的配置(语法检查、jsx编译、devServer...) 
    2. 下载好了所有相关的依赖
    3. 可以直接运行一个简单效果
2. react提供了一个用于创建react项目的脚手架库:create-react-app
3. 项目的整体技术架构为: react + webpack + es6 + eslinte
4. 使用脚手架开发的项目的特点:模块化,组件化,工程化

## 2.创建项目并使用
第一步: 全局安装 npm install -g create-react-app 
第二步: 切换到想创建项目的目录 create-react-app hello-react
第三步: cd hello-react
第四步: 启动项目 npm start


## react入口文件
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!-- %PUBLIC_URL%代表public文件夹的路径 -->
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <!-- 开启理想视口,用于做移动端的适配 -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- 用于配置浏览器页签 + 地址栏的颜色(仅支持安卓手机) -->
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <!-- 用于指定网页添加到手机屏幕后的图标 -->
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!-- 应用加壳时的配置文件 -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <!-- 若浏览器不支持js则展示标签中的内容 -->
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
