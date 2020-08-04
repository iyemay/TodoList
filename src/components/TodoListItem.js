import React, {Component} from "react";

export class TodoListItem extends Component {

    removeTask(e) {
        e.preventDefault();
        {
            console.log("Remove task");
        }
    }

    render() {
        const task = this.props.task;
        return (
            <div className="d-flex py-3 px-3 mx-5 my-5 border border-danger align-items-center
                        justify-content-between" key={task.id}>
                <h4 className="mb-0">{task.textTodo}</h4>
                <form>
                    <input type="image" alt="remove" src="icons/remove.svg" width="25" height="25"
                           onClick={this.removeTask.bind(this)}/>
                </form>
            </div>
        );
    }
}
