import React from 'react';
import './App.css';
import './data-structure-example'
import Test from "./Test";

import {observer} from 'mobx-react-lite'
import useStore from "./stores/helpers/use-store";

function App() {
    const {dataStore: {todoStore}} = useStore()

    return (
        <div className='App'>
            <Test/>
            {todoStore.todoList.map(todo => <div key={todo.id}>{todo.name}</div>)}
        </div>

    );
}

export default observer(App);
