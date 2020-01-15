import React, { Component } from 'react'
import io from 'socket.io-client'
import UpdatedMessages from './UpdatedMessages';
import { emojify } from 'react-emojione'
import Linkify from 'react-linkify'


class Chat extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: props.username,
            messages: [],
            convertUrl: []
        }

        this.socket = io('http://3.120.96.16:3000');
    }

    componentDidMount() {
        this.socket.on('messages', (data) => {

            this.setState({
                messages: data
            })
        })
    }

    componentWillUnmount() {
        this.socket.off();
    }



    render() {
        const { username, messages } = this.state;

        let msg = messages.map(message => {
            return <p key={message.id}>{message.username}: <Linkify> {emojify(message.content)} </Linkify></p>;
        })

        return (
            <div>
                {msg}
                <UpdatedMessages socket={this.socket} username={username}/>
            </div>
        )
    }
}

export default Chat