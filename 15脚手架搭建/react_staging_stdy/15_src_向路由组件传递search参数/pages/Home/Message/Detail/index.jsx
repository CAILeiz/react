import React, { Component } from "react";
import qs from "querystring"

const DetailData = [
  { id: "01", content: "今天天气好好" },
  { id: "02", content: "大磊子" },
  { id: "03", content: "你好,未来的自己" },
];
export default class Detail extends Component {
  render() {
    console.log(this.props);
    // 接收params参数
    // const { id, title } = this.props.match.params;

    // 接收query参数
    const {search} = this.props.location;
    const {id, title} = qs.parse(search.slice(1));
    console.log(id, title);
    const filtObj = DetailData.find((item) => item.id == id);
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{filtObj.content}</li>
      </ul>
    );
  }
}
