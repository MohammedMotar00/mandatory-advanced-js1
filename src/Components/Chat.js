import React, { Component } from 'react'
import io from 'socket.io-client'


class Chat extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: props.username,
            messages: []
        }
    }
    

    componentDidMount() {
        const socket = io('http://3.120.96.16:3000');
        socket.on('messages', (data) => {

        this.setState({
            messages: data
        })
    })
    }

    componentDidUpdate() {
        const socket = io('http://3.120.96.16:3000');
        socket.on('messages', (data) => {

        this.setState({
            messages: data
        })
    })
    }

    clg = () => {
        console.log(this.state.messages);
    }

    render() {
        let messages = this.state.messages.map(message => {
            return <p>{message.username}: {message.content}</p>;
        });
        return (
            <div className="chat">
                {messages}
            </div>
        )
    }
}

export default Chat
