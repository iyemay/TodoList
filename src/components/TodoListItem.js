import React, {Component} from "react";
import {connect} from "react-redux";
import {removeAllTodoAction, removeTodoAction} from "../actions";

class TodoListItem extends Component {

    removeTodo = (todoId) => {
        console.log(todoId);
        this.props.removeTodoAction(todoId);
    }

    render() {
        const task = this.props.task;
        return (
            <div className="d-flex py-3 px-3 mx-5 align-items-center
                        justify-content-between item-todo" key={task.todoId}>
                <h4 className="mb-0">{task.todoText}</h4>
                <form onSubmit={(event) => this.removeTodo(task.todoId)}>
                    <input type="image" alt="remove" src="icons/remove.svg" width="25" height="25"/>
                </form>
            </div>
        );
    }
}

function findTodoById(todoList, todoId) {
    return todoList.find(todo => todo.todoId === todoId);
}

function mapStateToProps(state, ownProps) {
    const todo = findTodoById(state.todoList, ownProps.id);
    return {
        task: todo
    };
}

const mapDispatchToProps = {
    removeTodoAction
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);
