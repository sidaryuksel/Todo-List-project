import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <form>
                <Link to='/form'>Go to form</Link>
           </form>
        )
    }
}
export default Home
