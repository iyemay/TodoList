import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodoAction } from "../../actions.js";

class AddTodo extends Component {

    state = { content: ''};

    handleChange = (event) => {
        this.setState({
            content: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodoAction(this.state.content);
        this.setState( {
            content: ''
        })
    };

    render() {
        return (
            <div>
                    <form className="d-flex flex-row" onSubmit={this.handleSubmit}>
                                <input className="todo-input mr-2 w-75" type="text" value={this.state.content}
                                       placeholder="Agregar nueva tarea" onChange={this.handleChange}/>

                                <input type="submit" className="add-todo-btn w-25" value="Agregar"/>
                    </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addTodoAction
};

export default connect(null, mapDispatchToProps)(AddTodo);