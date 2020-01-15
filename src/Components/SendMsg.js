import React, { Component } from 'react'
import io from 'socket.io-client'
import { Link } from 'react-router-dom'

class SendMsg extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: props.username,
            value: '',
            removeValue: ''
        }
    }


    setValue = e => {
        this.setState({
            value: e.target.value
        })
    }

    rensaInput = e => {
        e.preventDefault();
        this.setState({removeValue: this.state.value, value: ''});
        const socket = io('http://3.120.96.16:3000');
        socket.emit('message', {
            username: this.props.username,
            content: this.state.value
        })
    }

    x = (e) => {
        if (this.state.value.length >=1 && this.state.value.length <= 200) {
            return true;
        }
        alert('The content must be between 1 and 200 characters long')
        e.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.rensaInput.bind(this)}>
                <input type="text" value={this.state.value} onChange={this.setValue.bind(this)}/>
                <button onClick={this.x.bind(this)} type="submit">Send</button>
                <Link to="/">
                    <button>Exit</button>
                </Link>
            </form>
        )
    }
}

export default SendMsg
