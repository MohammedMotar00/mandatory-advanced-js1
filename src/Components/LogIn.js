import React, { Component } from 'react'
import Chat from './Chat'

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

    getUsername = () => {
        console.log(this.state.username);
    }

    rensaInput = e => {
        e.preventDefault();
        this.setState({username: this.state.value, value: ''});
    }

    openChat = () => {
        if (this.state.username.length >=1) {
            return <Chat username={this.state.username}/>
        }
        return null;
    }

    render() {
        return (
            <form onSubmit={this.rensaInput.bind(this)}>
                <input type="text" value={this.state.value} onChange={this.setName.bind(this)}/>
                <button onClick={this.getUsername.bind(this)}>Submit</button>
                {this.openChat()}
            </form>
        )
    }
}

export default LogIn
