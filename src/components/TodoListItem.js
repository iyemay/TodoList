import React, {Component} from "react";
import {connect} from "react-redux";

class TodoListItem extends Component {

    render() {
        const task = this.props.task;
        return (
            <div className="d-flex py-3 px-3 mx-5 align-items-center
                        justify-content-between item-todo" key={task.id}>
                <h4 className="mb-0">{task.todoText}</h4>
                <form>
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

export default connect(mapStateToProps)(TodoListItem);
