import React, { Component } from 'react'
import io from 'socket.io-client'
import UpdatedMessages from './UpdatedMessages';
import { emojify } from 'react-emojione'
import Linkify from 'react-linkify'
import '../App.css';


class Chat extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: props.username,
            messages: []
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
            return <div key={message.id} className="div-chat">
                        <p className="p-chat" key={message.id}>
                            <span className="span-chat">{message.username}:</span> 
                                <br/><br/> 
                            <Linkify> {emojify(message.content)} </Linkify>
                        </p>
                    </div>;
        })

        return (
            <div className="container-chat">
                {msg}
                <UpdatedMessages socket={this.socket} username={username}/>
            </div>
        )
    }
}

export default Chat