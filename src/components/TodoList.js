import React, { Component } from 'react'
import { connect } from 'react-redux';
import { todoActions } from '../redux/action/todoAction';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.props.getList();
    }

    render() {
        const todos = this.props.todos || {};
        console.log("todolist props", this.props);
        return (
            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map(todo => (
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