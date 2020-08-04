import React, {Component} from "react";

export class AddTodo extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <form>
                    <input type="text"/>
                    <button>
                        Agregar
                    </button>
                </form>
            </div>
        );
    }
}