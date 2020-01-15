import React, { Component } from 'react'
import io from 'socket.io-client'
import SendMsg from './SendMsg';
import { emojify } from 'react-emojione'
import Linkify from 'react-linkify'

class UpdatedMessages extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: props.username,
            newMsg: []
        }
    }

    componentDidMount() {
        const socket = io('http://3.120.96.16:3000');

        socket.on('new_message', (data) => {
            let msg = this.state.newMsg;
            msg.push(data);

            this.setState({newMsg: msg});
        })
    }


    render() {
        const { newMsg, username } = this.state;

        let messages = newMsg.map(message => {
            return <p key={message.id}>{message.username}: <Linkify> {emojify(message.content)} </Linkify></p>
        })
        return (
            <div>
                {messages}
                <SendMsg username={username}/>
            </div>
        )
    }
}

export default UpdatedMessages
