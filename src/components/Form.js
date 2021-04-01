import React, { Component } from 'react'
import { connect } from 'react-redux';
import { todoActions } from '../redux/action/todoAction';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            completed: false,
            search: "",
        }
    }

    handleInputText = (e) => {
        this.setState({
            text: e.target.value
        })
        console.log("state: ", this.state.text)
    }

    handleSubmitClick = (e) => {
        //  e.preventDefault();
        const todoItem = this.state;
        this.props.addTodoItem(todoItem);

        this.setState({
            text: '',
            completed: false
        });
    }

    handleSearchText = (e) => {
        const searchText = e.target.value;
        this.setState({
            search: searchText.toLowerCase()
        })
        console.log("search: ", this.state.search);
    }

    handleSearchSubmit = (e) => {
        this.props.searchTodoList(this.state.search);
    }

    render() {
        return (
            <form>
                <input type="text" className="todo-input" onChange={this.handleInputText} />
                <button className="todo-button" type="submit" value={this.state.text} onClick={this.handleSubmitClick}>
                    <i className="fas fa-plus"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all" >All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>

                </div>
                <input type="text" className="todo-search" onChange={this.handleSearchText} />
                <button className="todo-button" type="submit" onClick={this.handleSearchSubmit}>
                    <i class="fas fa-search"></i>
                </button>
            </form>
        )
    }
}
const stateToProps = (state) => ({
    todos: state.todos,
    todoItem: state.todoItem
})
const dispatchToProps = {
    getTodoList: todoActions.getTodoList,
    addTodoItem: todoActions.addTodoItem,
    searchTodoList: todoActions.searchTodoList
}

export default connect(stateToProps, dispatchToProps)(Form);
