import React, {Component} from "react";

export class AddTodo extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <form>
                    <input className="todo-input mr-2" size="60" type="text"/>
                    <button className="add-todo-btn">
                        <strong>Agregar</strong>
                    </button>
                </form>
            </div>
        );
    }
}