import React, { Component } from 'react'
import { connect } from 'react-redux'
import { todoActions } from '../redux/action/todoAction';
import { Link } from 'react-router-dom'

class TodoDetail extends Component {
    constructor(props) {
        super(props);
        const detailItem = this.props.todos.find(item => item.id === this.props.detail);
        console.log("detailItem", detailItem)

        this.state = {
            todoItem: {
                title: detailItem != null ? detailItem.title : "",
                message: detailItem != null ? detailItem.message : "",
                priority: detailItem != null ? detailItem.priority : "",
                modifiedDate: "",
            },
        }

        console.log("detail consturctor", this.state)
    }

    handleInputText = (e) => {
        console.log("todo detay handle", e.target);
        //find which value will be changed
        const titleUp = e.target.name === "title" ? e.target.value : this.state.todoItem.title;
        const messageUp = e.target.name === "message" ? e.target.value : this.state.todoItem.message;
        const priorityUp = e.target.name === "priority" ? e.target.value : this.state.todoItem.priority;

        var date = new Date();
        var todayDate = date.getMonth() + '/' + date.getDay() + '/' + date.getFullYear();
        this.setState({
            todoItem: {
                title: titleUp,
                message: messageUp,
                modifiedDate: todayDate,
                priority: priorityUp,
            }
        });
        console.log("heyo", this.state);
    }

    handleSubmit = (e) => {
        const todoUpdateItem = this.state.todoItem;
        console.log("update item", todoUpdateItem);
        debugger;
        this.props.updateTodoItem(todoUpdateItem)


    }

    render() {
        const { title, message } = this.state.todoItem != null ? this.state.todoItem : "";
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
                    <select name="priority" className="filter-todo" onChange={this.handleInputText}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </form>
                <form>
                    <button className="todo-button" onSubmit={this.handleSubmit}>Update</button>
                </form>
                <form>
                    <Link to='/form'>Back to form</Link>
                </form>
            </div>
        )
    }
}

const stateToProps = (state) => ({
    todos: state.todos,
    detail: state.detail
})

const dispatchToProps = {
    updateTodoItem: todoActions.updateTodoItem
}

export default connect(stateToProps, dispatchToProps)(TodoDetail)