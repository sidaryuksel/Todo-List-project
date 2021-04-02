import React, { Component } from 'react'
import { connect } from 'react-redux'
import { todoActions } from '../redux/action/todoAction'
import Todo from './Todo'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            searchSubmitted: false,
            searchedTodos: [],
        }
    }

    handleSearchText = (e) => {
        const searchText = e.target.value;
        this.setState({
            searchTerm: searchText.toLowerCase()
        })
        console.log("search text: ", searchText);
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();
        this.props.searchTodoList(this.state.searchTerm);
    }

    render() {
        return (
            <div>
                <input placeholder="Search..." type="text" className="search" onChange={this.handleSearchText} />
                <button className="todo-button" type="submit" onClick={this.handleSearchSubmit}>
                    <i className="fas fa-search"></i>
                </button>
                {
                    this.state.searchedTodos.map(item =>
                        <Todo value={item} />
                    )
                }
            </div >
        )
    }
}

const stateToProps = (state) => ({
    todos: state.todos,
    search: state.search,
})

const dispatchToProps = {
    searchTodoList: todoActions.searchTodoList
}

export default connect(stateToProps, dispatchToProps)(Search)