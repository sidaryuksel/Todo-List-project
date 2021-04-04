import React, { Component } from 'react'
import { connect } from 'react-redux'
import { todoActions } from '../redux/action/todoAction';
import { Link } from 'react-router-dom'

class TodoDetail extends Component {
    constructor(props) {
        super(props);
        const detailItem = this.props.todos;
        let detail = detailItem[0];

        if (detail == null) {
            detail = {
                id: "",
                title: "",
                message: "",
                priority: "",
            }
        }
        this.state = {
            todoItem: {
                id: detail.id,
                title: detail.title,
                message: detail.message,
                priority: detail.priority,
                modifiedDate: "",
            },
        }

        console.log("detail consturctor", this.state)
        console.log("detail props", this.props)

    }

    handleInputText = (e) => {
        console.log("todo detay handle", e.target);
        //find which value will be changed
        const titleUp = e.target.name === "title" ? e.target.value : this.state.todoItem.title;
        const messageUp = e.target.name === "message" ? e.target.value : this.state.todoItem.message;
        const priorityUp = e.target.name === "priority" ? e.target.value : this.state.todoItem.priority;

        var date = new Date();
        var todayDate = date.getDay() + '/' + (date.getMonth() + 1)+ '/' + date.getFullYear();
        console.log("todaydate", )
        this.setState({
            todoItem: {
                ...this.state.todoItem,
                title: titleUp,
                message: messageUp,
                modifiedDate: todayDate,
                priority: priorityUp,
            }
        });
        console.log("heyo", this.state);
        console.log("update prop", this.props);
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log("update stae", this.state.todoItem)
        this.props.updateTodoItem(this.state.todoItem.id, this.state.todoItem);
    }

    render() {

        const { title, message,priority } = this.state.todoItem != null ? this.state.todoItem : "";
        console.log("title", title);

        return (
            <div>
                <header>
                    <h5 className="message">Title</h5>
                </header>
                <form>
                    <textarea type="title" name="title" className="todo-text" onChange={this.handleInputText} value={title} />
                </form>
                <header>
                    <h5 className="message">Message</h5>
                </header>
                <form>
                    <textarea type="message" name="message" className="todo-text-message" onChange={this.handleInputText} value={message} />
                </form>
                <header>
                    <h5 className="message">Priority</h5>
                </header>
                <form>
                    <select name="priority" className="filter-todo" onChange={this.handleInputText} value={priority}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </form>
                <form>
                    <button className="todo-button" onClick={this.handleClick}>Update</button>
                </form>
                <form>
                    <Link to='/form'>Back to form</Link>
                </form>
            </div>
        )}
}

const stateToProps = (state) => ({
    todos: state.todos,
    detail: state.detail
})

const dispatchToProps = {
    updateTodoItem: todoActions.updateTodoItem
}

export default connect(stateToProps, dispatchToProps)(TodoDetail)