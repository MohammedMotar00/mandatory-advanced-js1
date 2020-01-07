import React, { Component } from 'react'
import io from 'socket.io-client'

class Chat extends Component {
    render() {
        let username = this.props.username;
        const socket = io('http://3.120.96.16:3000')
        return (
            <div>
                <p>{username}</p>
            </div>
        )
    }
}

export default Chat
