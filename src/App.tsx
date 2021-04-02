import React from 'react';
import './App.css';
import './data-structure-example'
import Test from "./Test";
import {observer} from 'mobx-react-lite'

function App() {
    return (
        <div className='App'>
            <Test/>
        </div>

    );
}

export default observer(App);
