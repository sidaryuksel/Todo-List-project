import React, { Component } from 'react'
import { connect } from 'react-redux';
import { todoActions } from '../redux/action/todoAction';
import Search from './Search';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItem: {
                title: "",
                completed: false,
                message: "",
                createdDate: new Date(),
                modifiedDate: "",
                priority: "",
            }
        }
    }

    handleInputText = (e) => {
        var date = new Date();
        var todayDate = date.getMonth() + '/' + date.getDay() + '/' + date.getFullYear();
        console.log(todayDate);
        const todoItem = {
            title: e.target.value,
            message: e.target.value,
            createdDate: todayDate,
            priority: this.state.priority,
            completed: !this.state.todoItem.completed
        }
        this.setState({
            todoItem: todoItem
        })
        console.log("state: ", this.state.todoItem)
    }

    handleChange = (e) => {
        this.setState({priority: e.target.value});
    }

    handleSubmitClick = (e) => {
        e.preventDefault();
        const todoItem = this.state.todoItem;
        console.log("todoıtem: ", todoItem);
        if (todoItem.title !== "") {
            this.props.addTodoItem(todoItem);
            this.setState({
                title: "",
                message: "",
                completed: false,
                createdDate: new Date(),
            });
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input placeholder="Title..." type="title" className="todo-input" onChange={this.handleInputText} />
                    <input placeholder="Message..." type="message" className="todo-input-msg" onChange={this.handleInputText} />
                    <div className="select">
                        <select name="todos" className="filter-todo" onChange={this.handleChange}>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <button className="todo-button" type="submit" value={this.state.todoItem} onClick={this.handleSubmitClick}>
                        <i className="fas fa-plus"></i>
                    </button>
                </form>
                <form>
                    <Search />
                </form>
                <h3 className="todo-header" >Select Title</h3>
            </div>
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
