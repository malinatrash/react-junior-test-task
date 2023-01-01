import React from 'react';
import './index.css';
import App from './App';
import {createStore} from "redux";
import { rootReducer } from './redux/reducer/rootReducer'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'


const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));