import React, {Component} from "react";
import TodoListItem from "./TodoListItem";
import {connect} from "react-redux";
import {addTodoAction, removeAllTodoAction, removeTodoAction} from "../actions";

class TodoList extends Component {

    removeAllTodo = (event) => {
        event.preventDefault();
        this.props.removeAllTodoAction();
    }

    render() {
        if (this.props.todoList.length) {
            return (
                <div className="d-flex flex-column col-md-8 offset-md-2">
                    <div className="mb-0 mt-3 py-3 px-3 mx-5 d-flex justify-content-between header-todo-list">
                        <h4>
                            toDo list by Iron Bit
                        </h4>
                        <form onSubmit={this.removeAllTodo}>
                            <input type="image" alt="remove-all" src="icons/recycle-bin.svg"
                                   width="25" height="25"/>
                        </form>
                    </div>
                    {this.props.todoList.map(task => {
                        return (
                            <TodoListItem key={task.todoId} id={task.todoId}/>
                        );
                    })}
                </div>
            )
        } else {
            return (
                <div className="d-flex flex-column col-md-8 offset-md-2">
                    <div className="mb-0 mt-3 py-3 px-3 mx-5 d-flex justify-content-between header-todo-list">
                        <h4>
                            toDo list by Iron Bit
                        </h4>
                        <form>
                            <input type="image" alt="remove-all" src="icons/recycle-bin.svg" width="25" height="25"
                            />
                        </form>
                    </div>

                    <div className="d-flex py-3 px-3 mx-5 align-items-center
                        justify-content-center item-todo">
                        <h4 className="text-center">No hay ToDo's, tomate un café!</h4>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        todoList: state.todoList
    };
}

const mapDispatchToProps = {
    removeAllTodoAction
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

