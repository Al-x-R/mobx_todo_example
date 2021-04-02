import React from "react";
// import Todo from './stores/data/todos/todo'
// import TodoStore from './stores/data/todos/todo-store'
import {useObserver, observer} from 'mobx-react-lite'

// const todo = new Todo('title', userId, new TodoStore())

const Test = observer(() => {
    console.log(todo.name)
    return (
        <div>
            <div>{todo.name}</div>
            <button onClick={() => todo.updateName('First name')}>First name</button>
            <button onClick={() => todo.updateName('Last name')}>Last name</button>
        </div>
    )
})

/*const Test = () => {
    return useObserver(() =>
        <div>{todo.name}</div>
        <button onClick={() => todo.updateName('First name')}>First name</button>
        <button onClick={() => todo.updateName('Last name')}>Last name</button>
    )
}*/

export default Test