import React from 'react';
import './App.scss';
import { connect } from "react-redux";
import TodoList from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
import { Header } from "./components/Header";
import {addTodoAction, removeAllTodoAction, removeTodoAction} from "./actions";

export default class App extends React.Component {


    render() {
        return(

            <div className="d-flex flex-column">
                <Header />
                <AddTodo />
                <TodoList />
            </div>

        );
    }
}

