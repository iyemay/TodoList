import React, {Component} from "react";

export class TodoListItem extends Component {

    render() {
        const task = this.props.task;
        console.log(task);
        return (
            <div className="d-flex py-3 px-3 mx-5 my-5 border border-danger align-items-center
                        justify-content-between">
                <h4 className="mb-0">{task.textTodo}</h4>
                <img alt="remove" src="../icons/remove.svg" width="25" height="25"/>
            </div>
        );
    }
}
