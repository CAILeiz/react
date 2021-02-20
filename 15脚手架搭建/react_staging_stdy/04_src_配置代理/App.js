import React, {Component} from "react";
import axios from "axios";
class App extends Component {
  // 获取5000端口的学生数据
  getStudentData = () => {
    axios.get("http://localhost:3000/api1/students").then(res => {
      console.log("成功了", res.data);
    }).catch(err => {
      console.log("失败了", err);
    })
  }
  // 获取5001端口的学生数据
  getCars = () => {
    axios.get("http://localhost:3000/api2/cars").then(res => {
      console.log("成功了", res.data);
    }).catch(err => {
      console.log("失败了", err);
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
        <button onClick={this.getCars}>点我获取车辆数据</button>
      </div>
    )
  }
}
export default App;
