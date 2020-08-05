import React from 'react';
import './App.scss';
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
import {Header} from "./components/Header";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                {
                    id: 1,
                    textTodo: "Tarea 1"
                },
                {
                    id: 2,
                    textTodo: "Tarea 2"
                },
                {
                    id: 3,
                    textTodo: "Tarea 3"
                },
                {
                    id: 4,
                    textTodo: "Tarea 4"
                },
                {
                    id: 5,
                    textTodo: "Tarea 5"
                },
                {
                    id: 6,
                    textTodo: "Tarea 6"
                }
            ]
        };
    }

    render() {
        return(

            <div className="d-flex flex-column">
                <Header />
                <AddTodo />
                <TodoList todoList={this.state.todoList}/>
            </div>

        );
    }
}

export default App;
