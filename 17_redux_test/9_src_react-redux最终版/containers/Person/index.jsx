import React, { Component } from 'react'
import {connect} from "react-redux"
import {addPerson, deletePerson} from "../../redux/actions/person"
import {nanoid} from "nanoid";  

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        console.log(name, age);
        let personObj = {id: nanoid(), name, age}
        this.props.addPerson(personObj)
        this.nameNode.value = "";
        this.ageNode.value = "";
    }
    handleDelete = personId => {
        console.log("personId", personId);
        console.log(this.props.deletePerson(personId));
    }
    render() {
        return (
            <div>
               <h2>我是Person组件, 上方组件求和为{this.props.count}</h2> 
               <input ref={c => this.nameNode = c} type="text" placeholder="输入名字"/>
               <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>
               <button onClick={this.addPerson}>添加一个人</button>
               <ul>
                   {this.props.persons.map(person => {
                       return (
                            <li key={person.id}>名字{person.name} --- 年龄{person.age}&nbsp;&nbsp;&nbsp;<button onClick={() => this.handleDelete(person.id)}>点我删除</button></li>
                       )
                   })}
               </ul>
            </div>
        )
    }
}

export default connect(
    state => ({persons: state.persons, count: state.count}),
    {
        addPerson,
        deletePerson
    }
)(Person)
