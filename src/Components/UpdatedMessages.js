import React, { Component } from 'react'
import SendMsg from './SendMsg';
import { emojify } from 'react-emojione'
import Linkify from 'react-linkify'
import '../App.css';

class UpdatedMessages extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: props.username,
            newMsg: []
        }
    }

    componentDidMount() {
        this.props.socket.on('new_message', (data) => {
            let msg = this.state.newMsg;
            msg.push(data);

            this.setState({newMsg: msg});
        })
    }

    componentWillUnmount() {
        this.props.socket.off('new_message');
    }


    render() {
        const { newMsg, username } = this.state;

        let messages = newMsg.map(message => {
            return <div className="div-updatedMsg" key={message.id}>
                        <p className="updatedMsg" key={message.id}>
                            <span className="updatedMsg-span">{message.username}:</span> 
                                <br/><br/> 
                            <Linkify> {emojify(message.content)} </Linkify>
                        </p>
                    </div>
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
