import React, { Component } from 'react'
import { connect } from 'react-redux';
import { todoActions } from '../redux/action/todoAction';
import Search from './Search';
import TodoList from './TodoList';

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
        console.log("handle input",e.target.type);

        const title = e.target.name === "title" ? e.target.value : this.state.todoItem.title;
        const message = e.target.name === "message" ? e.target.value : this.state.todoItem.message;
        const priority = e.target.name === "priority" ? e.target.value : this.state.todoItem.priority;
;
        const todoItemOb = {
            title: title,
            message: message,
            createdDate: todayDate,
            priority: priority,
        }
        console.log("form priority", todoItemOb.priority)
        this.setState({
            todoItem: {
                title: todoItemOb.title,
                message: todoItemOb.message,
                createdDate: todoItemOb.createdDate,
                priority: todoItemOb.priority,
            }
        })
        console.log("state: ", this.state.todoItem)
    }

    handleSubmitClick = (e) => {
        console.log("submit state",this.state)
        const todoItem = this.state.todoItem;
        console.log("todoıtem: ", todoItem);
        if (todoItem.title !== "" && todoItem.message !== "") {
            this.props.addTodoItem(todoItem);
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input autoFocus placeholder="Title..." name="title" className="todo-input" onChange={this.handleInputText} />
                    <input placeholder="Message..." name="message" className="todo-input-msg" onChange={this.handleInputText} />
                    <div className="select">
                        <select name="priority" className="filter-todo" onChange={this.handleInputText}>
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
                <TodoList/>
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
    addTodoItem: todoActions.addTodoItem,
}

export default connect(stateToProps, dispatchToProps)(Form);
