import React, { Component } from 'react'

class Home extends Component {
    handleSubmit = () => {
        this.props.history.push('/form');
    }
    render() {
        return (
            <form>
                <button className="todo-button" onSubmit={this.handleSubmit}>Go to form</button>
            </form>
        )
    }
}
export default Home
