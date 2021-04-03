import React, { Component } from 'react'
import { connect } from 'react-redux';
import { todoActions } from '../redux/action/todoAction';
import Todo from './Todo';
import Form from './Form'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.props.getList();
    }

    handleClick = (e) => {
        this.props.history.push('/tododetail');
    }

    render() {
        console.log("todolist props", this.props);
        return (
            <div className="todo-container">
                <ul className="todo-list">
                    {this.props.todos.map(todo => (
                        <Todo value={todo} key={todo.id} id={todo.id} />
                    ))
                    }

                </ul>
            </div>
        )
    }
}

const stateToProps = (state) => ({
    todos: state.todos
})

const dispatchToProps = {
    getList: todoActions.getTodoList
}
export default connect(stateToProps, dispatchToProps) (TodoList);