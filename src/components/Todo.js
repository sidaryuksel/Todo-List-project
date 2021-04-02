import React, { Component } from 'react'
import { connect } from 'react-redux'
import { todoActions } from '../redux/action/todoAction'
import TodoDetail from './TodoDetail'


class Todo extends Component {

    handleDelete = (e) => {
        e.preventDefault();

        console.log("targetvalue: ", this.props.id);
        this.props.deleteItem(this.props.value);
        this.props.getTodoList();
    }

    handleComplete = (e) => {
        this.props.completedTodo(this.props.value);
    }

    handleClick = (e) => {
        return (
            <div><TodoDetail value={this.props.value} /></div>
        )
    }

    render() {

        console.log("todoprop",this.props);
        return (
            <div className="todo">
                <li className={`todo-item ${this.props.value.completed ? "completed" : ''}`} value={this.props.value} onClick={this.handleClick}>
                    {this.props.value.text}
                    </li>
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
    completedTodo: todoActions.completeTodoItem,
    getTodoList: todoActions.getTodoList
}

export default connect(stateToProps, dispatchToProps)(Todo);