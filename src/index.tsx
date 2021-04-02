import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mobx-react-lite'

import {StoreProvider} from './stores/helpers/store-context'
import createStore from "./stores/helpers/create-store";

const rootStore = createStore()

console.log('rootStore', rootStore)

ReactDOM.render(
    <StoreProvider value={rootStore}>
        <App/>
    </StoreProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
