import React, {Component} from "react";
import {TodoListItem} from "./TodoListItem";

export class TodoList extends Component {
    render() {
        if(this.props.todoList.length) {
            return (
                <div>
                    <h4 className="text-center">toDo list by Iron Bit</h4>
                    {this.props.todoList.map(task => {
                        return (
                            <TodoListItem key={task.id} task={task}/>
                        );
                    })}
                </div>
            )
        }
    }
}

