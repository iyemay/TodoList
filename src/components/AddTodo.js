import React, {Component} from "react";

export class AddTodo extends Component {

    render() {
        return (
            <div className="d-flex justify-content-center col-md-8 offset-md-2">
                <form>
                    <input className="todo-input mr-2" size="68" type="text"/>
                    <button className="add-todo-btn">
                        <strong>Agregar</strong>
                    </button>
                </form>
            </div>
        );
    }
}