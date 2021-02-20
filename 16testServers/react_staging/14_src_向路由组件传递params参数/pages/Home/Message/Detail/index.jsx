import React, { Component } from 'react'

const DetailData = [
    {id: "01", content: "今天天气好好"},
    {id: "02", content: "大磊子"},
    {id: "03", content: "你好,未来的自己"}
]
export default class Detail extends Component {
    render() {
        console.log(this.props);
    const {id, title} = this.props.match.params;
    const filtObj = DetailData.find(item => item.id == id) 
    return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{filtObj.content}</li>
            </ul>
        )
    }
}
