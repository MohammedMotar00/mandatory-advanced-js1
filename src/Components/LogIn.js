import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LogIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            value: ''
        }
    }

    setName = e => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        let namn = this.state.value;

        return (
            <form>
                <h1>Logga in</h1>
                <div><input type="text" value={this.state.value} onChange={this.setName.bind(this)}/></div>
                <Link onClick={event => !this.state.value ? event.preventDefault() : null} to={"/chat/" + namn}>
                    <button type="submit">LogIn</button>
                </Link>
            </form>
        )
    }
}

export default LogIn
