import React, { Component } from 'react'
import { connect } from 'react-redux'
import { todoActions } from '../redux/action/todoAction'
import {withRouter} from 'react-router-dom'

class Todo extends Component {

    handleDelete = (e) => {
        e.preventDefault();
        console.log("targetvalue: ", this.props.id);
        this.props.deleteItem(this.props.value);
    }

    handleComplete = (e) => {
        this.props.completedTodo(this.props.value);
    }

    handleClick = (e) => {
        this.props.todoDetail(e.target.value);
        this.props.history.push('/tododetail');
    }

    render() {

        console.log("todoprop",this.props);
        return (
            <div className="todo">
                <li className={`todo-item ${this.props.value.completed ? "completed" : ''}`} value={this.props.id} onClick={this.handleClick}>
                    {this.props.value.title}
                    </li>
                <button className="complete-btn" onClick={this.handleComplete}><i className="fas fa-check"></i></button>
                <button className="trash-btn" onClick={this.handleDelete}><i className="fas fa-trash"></i></button>
            </div>
        )
    }
}

const stateToProps = (state) => ({
    todoList: state.todos,
    detail: state.detail,
})

const dispatchToProps = {
    deleteItem: todoActions.deleteTodoItem,
    completedTodo: todoActions.completeTodoItem,
    getTodoList: todoActions.getTodoList,
    todoDetail: todoActions.todoDetail,
}

export default connect(stateToProps, dispatchToProps)(withRouter(Todo));