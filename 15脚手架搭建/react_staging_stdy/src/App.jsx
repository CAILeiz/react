import React, { Component } from "react";
import {Button, DatePicker} from "antd"
import "antd/dist/antd.css"
import './App.less';
const { RangePicker } = DatePicker;
class App extends Component {
  render() {
    return (
      <div>
        App...
        <button>点我</button>
        <Button type="primary">Primary Button</Button>
        <RangePicker />
      </div>
    );
  }
}
export default App;
