import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { todoActions } from '../redux/action/todoAction';
import { todoItem } from '../redux/reducer/todoReducer';

class TodoDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItem: {
                title: "",
                message: "",
                modifiedDate: "",
                priority: "",
            },
        }

    }

    componentDidMount() {
        //get information by id which todo item has been sellected
        const detail = this.props.todos.find(item => item.id === this.props.detail);
        this.setState({
            todoItem: detail
        })
    }

    handleInputText = (e) => {
        console.log("todo detay handle", e.target);
        //find which value will be changed
        if (e.target.name === "title") {
            this.setState({
                todoItem: {
                    title: e.target.value
                }
            })
        } else if (e.target.name === "message") {
            this.setState({
                todoItem: {
                    message: e.target.value
                }
            })
        } else if (e.target.name === "priority") {
            console.log("priori", e.target.value)
            this.setState({
                todoItem: {
                    priority: e.target.value
                }
            })
        }
        var date = new Date();
        var todayDate = date.getMonth() + '/' + date.getDay() + '/' + date.getFullYear();
        this.setState({
            todoItem: {
                modifiedDate: todayDate
            }
        });
        console.log("heyo", this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const todoUpdateItem = this.state.todoItem;
        console.log("update item", todoUpdateItem);
        this.props.todoUpdateItem(todoUpdateItem)
    }

    handleSubmitBack = (e) => {
        this.props.history.push('/');
    }
    render() {
        const { title, message, priority } = this.state.todoItem != null ? this.state.todoItem : "";
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
                    <select name="priority" className="filter-todo" onChange={this.handleChange} value={priority}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </form>
                <form>
                    <button className="todo-button" onSubmit={this.handleSubmit}>Update</button>
                </form>
                <form>
                    <button className="todo-button" onSubmit={this.handleSubmitBack}>Back to form</button>
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
    todoUpdateItem: todoActions.todoUpdateItem
}

export default connect(stateToProps, dispatchToProps)(withRouter(TodoDetail))