import React from 'react';
import './App.scss';
import TodoList from "./components/todoList/TodoList";
import  AddTodo  from "./components/addTodo/AddTodo";
import { Header } from "./components/header/Header";

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

