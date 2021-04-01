import React, { Component } from 'react'
import { connect } from 'react-redux';
import { todoActions } from '../redux/action/todoAction';

class Todo extends Component {

    handleDelete = (e) => {
        console.log("targetvalue: ", this.props.id);
        this.props.deleteItem(this.props.todo);
    }

    handleComplete = (e) => {
        const todo = this.props.todo;
        console.log("complete: ",todo)
        this.props.completedTodo(todo);
       /* this.props.todoList.map(item => {
            if (item.id === this.props.todo.id) {
            return {
                ...item,
                completed: !item.completed
            }
        }
        } 
        )*/
    }

    render() {
        return (
            <div className="todo">
                <li className={`todo-item ${this.props.todo.completed ? "completed" : ""}`}>{this.props.todo.text}</li>
                <button className="complete-btn" onClick={this.handleComplete}><i className="fas fa-check"></i></button>
                <button className="trash-btn" onClick={this.handleDelete}><i className="fas fa-trash"></i></button>
            </div>
        )
    }
}

const stateToProps = (state) => ({
    todoList: state.todos
})

const dispatchToProps = {
    deleteItem: todoActions.deleteTodoItem,
    completedTodo: todoActions.completeTodoItem
}

export default connect(stateToProps, dispatchToProps)(Todo);