import React, { Component } from 'react'
import { connect } from 'react-redux';
import { todoActions } from '../redux/action/todoAction';
import Search from './Search';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItem: {
                text: "",
                completed: false,
            },
        }
    }

    handleInputText = (e) => {
        const todoItem = { text: e.target.value, completed: this.state.todoItem.completed }
        this.setState({
            todoItem: todoItem
        })
        console.log("state: ", this.state.todoItem)
    }

    handleSubmitClick = (e) => {
        //  e.preventDefault();
        const todoItem = this.state.todoItem;
        console.log("todoıtem: ", todoItem);
        if (todoItem.text !== "") {
            this.props.addTodoItem(todoItem);
            this.setState({
                text: '',
                completed: false,
                status: "",
            });
        }
    }

    render() {
        return (
            <form>
                <input type="text" className="todo-input" onChange={this.handleInputText} />
                <button className="todo-button" type="submit" value={this.state.text} onClick={this.handleSubmitClick}>
                    <i className="fas fa-plus"></i>
                </button>
                <Search />
            </form>
        )
    }
}
const stateToProps = (state) => ({
    todos: state.todos,
    todoItem: state.todoItem,
    search: state.search,
})
const dispatchToProps = {
    getTodoList: todoActions.getTodoList,
    addTodoItem: todoActions.addTodoItem,
}

export default connect(stateToProps, dispatchToProps)(Form);
