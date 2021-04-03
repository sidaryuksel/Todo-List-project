import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItem: {},
        }

    }

    componentDidMount() {
        console.log("prop", this.props.todos)
        const detail = this.props.todos.find(item => item.id === this.props.detail);
        console.log("detay id5", detail);

        this.setState({
            todoItem: detail
        })
    }

    handleInputText = (e) => {
        console.log("todo detay handle",e.target);
    }

    render() {
        const { title, message, createdDate } = this.state.todoItem != null ? this.state.todoItem : "";
        console.log("title", title);

        return (
            <div>
                <header>
                    <h5 className="message">Title</h5>
                </header>
                <form>
                    <textarea type="title" className="todo-text" onChange={this.handleInputText} value={title} />
                </form>
                <header>
                    <h5 className="message">Message</h5>
                </header>
                <form>
                    <textarea type="message" className="todo-text-message" onChange={this.handleInputText} value={message} />
                </form>
                <header>
                    <h5 className="message">Created Date</h5>
                </header>
                <form>
                    <textarea type="createdDate" className="todo-createdDate" onChange={this.handleInputText} value={createdDate} />
                </form>
                <form>
                    <button className="todo-button">Update</button>
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

}

export default connect(stateToProps, dispatchToProps)(TodoDetail)