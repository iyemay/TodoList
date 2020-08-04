import React from 'react';
import './App.css';
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";

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
                }
            ]
        };
    }


    render() {
        return(

            <div>
                <AddTodo />
                <TodoList todoList={this.state.todoList}/>
            </div>

        );
    }
}

export default App;
