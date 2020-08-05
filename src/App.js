import React from 'react';
import './App.scss';
import TodoList from "./components/TodoList";
import  AddTodo  from "./components/AddTodo";
import { Header } from "./components/Header";

export default class App extends React.Component {


    render() {
        return(
            <div className="d-flex flex-column mx-auto w-75">
                <Header />
                <AddTodo />
                <TodoList />
            </div>
        );
    }
}

