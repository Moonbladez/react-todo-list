import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./styles/todolist.css";

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		};
		this.create = this.create.bind(this);
		this.remove = this.remove.bind(this);
		this.update = this.update.bind(this);
		this.toggleCompletion = this.toggleCompletion.bind(this);
	}

	//make new todo appear on list
	create(newTodo) {
		this.setState({
			todos: [...this.state.todos, newTodo],
		});
	}

	//remove id by filtering not the id
	remove(id) {
		this.setState({
			todos: this.state.todos.filter((todo) => todo.id !== id),
		});
	}

	//update edited information
	update(id, updatedTask) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, task: updatedTask };
			}
			return todo;
		});
		this.setState({ todos: updatedTodos });
	}

	//toggle complete
	toggleCompletion(id) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		this.setState({ todos: updatedTodos });
	}

	render() {
		const todos = this.state.todos.map((todo) => {
			return (
				<Todo
					key={todo.id}
					id={todo.id}
					task={todo.task}
					completed={todo.completed}
					toggleTodo={this.toggleCompletion}
					removeTodo={this.remove}
					updateTodo={this.update}
				/>
			);
		});
		return (
			<div className='todo-list'>
				<h1>Things Taco</h1>
				<ul>{todos}</ul>
				<NewTodoForm createTodo={this.create} />
			</div>
		);
	}
}

export default TodoList;
