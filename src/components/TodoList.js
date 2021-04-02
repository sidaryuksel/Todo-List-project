import React, { Component } from 'react'
import { connect } from 'react-redux';
import { todoActions } from '../redux/action/todoAction';
import Todo from './Todo';
import Form from './Form'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 0
        }
        this.props.getList();
    }

    handleClick = (e) => {
        this.setState({
            length: this.props.todos.length
        })
        return (
            <div>
                <Form />
            </div>)
    }

    render() {
        console.log("todo listesi", this.props.todos);
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
export default connect(stateToProps, dispatchToProps)(TodoList);