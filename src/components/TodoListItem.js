import React, {Component} from "react";

export class TodoListItem extends Component {


    render() {
        const task = this.props.task;
        return (
            <div className="d-flex py-3 px-3 mx-5 align-items-center
                        justify-content-between item-todo" key={task.id}>
                <h4 className="mb-0">{task.textTodo}</h4>
                <form>
                    <input type="image" alt="remove" src="icons/remove.svg" width="25" height="25"/>
                </form>
            </div>
        );
    }
}
