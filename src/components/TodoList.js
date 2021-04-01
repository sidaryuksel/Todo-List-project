import React, { Component } from 'react'
import { connect } from 'react-redux';
import { todoActions } from '../redux/action/todoAction';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.props.getList();

    }
    componentDidMount() {
    }

    render() {
        console.log("todo listesi",this.props.todos);
        return (
            <div className="todo-container">
                <ul className="todo-list">
                    {this.props.todos.map(todo => (
                       <Todo todo={todo} key={todo.id} id={todo.id}/> 
                    ))}
                    
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