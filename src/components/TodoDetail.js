import React, { Component } from 'react'
import { connect } from 'react-redux'

 class TodoDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItem: {
                title: "",
                completed: false,
                title: "",
                message: "",
                createdDate: "",
                modifiedDate: "",
                priority: "",
            },

        }
    }


    render() {
        return (
            <div>
               <h1>Merhaba</h1> 
            </div>
        )
    }
}

const stateToProps = (state) => ({

})

const dispatchToProps = {

}

export default connect(stateToProps, dispatchToProps) (TodoDetail)