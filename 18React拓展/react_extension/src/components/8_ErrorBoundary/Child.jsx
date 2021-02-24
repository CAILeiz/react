import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        // users: [
        //     {id: "001", name: "tom", age: 18},
        //     {id: "002", name: "jack", age: 19},
        //     {id: "003", name: "peiqi", age: 20},
        // ]
        users: "abc"
    }
    render() {
        const {users} = this.state;
        return (
            <div>
                <h2>我是Child组件</h2>
                <ul>
                    {users.map(user => {
                        return (
                            <li key={user.id}>{user.name} ---- {user.age}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
