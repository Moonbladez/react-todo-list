import React, { Component } from "react";
import "./styles/todo.css";
import { FaPenAlt, FaTrash } from "react-icons/fa";

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			task: this.props.task,
		};
		this.handleRemove = this.handleRemove.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleRemove() {
		this.props.removeTodo(this.props.id);
	}

	toggleForm() {
		this.setState({ isEditing: !this.state.isEditing });
	}

	//handle edit input
	handleUpdate(event) {
		event.preventDefault();
		this.props.updateTodo(this.props.id, this.state.task);
		this.setState({ isEditing: false });
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	handleToggle(event) {
		this.props.toggleTodo(this.props.id);
	}

	render() {
		let result;
		if (this.state.isEditing) {
			result = (
				<div className='todo'>
					<form onSubmit={this.handleUpdate} className='todo-edit-form'>
						<input
							type='text'
							value={this.state.task}
							name='task'
							onChange={this.handleChange}
						/>
						<button>Save</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div className='todo'>
					<li
						className={
							this.props.completed
								? "todo-task completed"
								: "todo-task incomplete"
						}
						onClick={this.handleToggle}
					>
						{this.props.task}
					</li>
					<div className='todo-buttons'>
						<button onClick={this.toggleForm}>
							<FaPenAlt />
						</button>
						<button onClick={this.handleRemove}>
							<FaTrash />
						</button>
					</div>
				</div>
			);
		}
		return result;
	}
}

export default Todo;
