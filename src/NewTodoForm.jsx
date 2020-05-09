import React, { Component } from "react";
import { v4 as uuid } from "uuid";

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: "" };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	//changes in the input
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	//submission of task
	handleSubmit(event) {
		event.preventDefault();
		this.props.createTodo({ ...this.state, id: uuid(), completed: false });
		this.setState({ task: "" });
	}
	render() {
		return (
			<form action='' onSubmit={this.handleSubmit}>
				<label htmlFor='task'>New Task:</label>
				<input
					type='text'
					placeholder='New Task'
					id='task'
					name='task'
					value={this.state.task}
					onChange={this.handleChange}
				/>
				<button>Add</button>
			</form>
		);
	}
}

export default NewTodoForm;
