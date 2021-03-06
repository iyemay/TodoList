import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './components/addTodo/addTodo.scss';
import './components/header/header.scss';
import './components/todoList/todoList.scss';
import './components/todoListItem/todoListItem.scss';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import todosReducer from "./reducer";


const store = createStore(
    todosReducer,
    applyMiddleware(logger)
);

ReactDOM.render(

    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

