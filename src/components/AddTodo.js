import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodoAction } from "../actions.js";

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
            <div className="d-flex justify-content-center col-md-8 offset-md-2">
                <form onSubmit={this.handleSubmit}>
                    <input className="todo-input mr-2" size="68" type="text" value={this.state.content}
                                    onChange={this.handleChange}/>
                    <button className="add-todo-btn">
                        <strong>Agregar</strong>
                    </button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addTodoAction
};

export default connect(null, mapDispatchToProps)(AddTodo);