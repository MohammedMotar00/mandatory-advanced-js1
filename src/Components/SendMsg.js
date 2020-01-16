import React, { Component } from 'react'
import io from 'socket.io-client'
import { Link } from 'react-router-dom'
import '../App.css';
import { IoIosCloseCircle, IoIosSend } from 'react-icons/io';

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
        const { value } = this.state;

        return (
            <form className="form-sendMsg" onSubmit={this.rensaInput.bind(this)}>
                <div className="div-input-sendMsg">
                    <input 
                        className="input-sendMsg" 
                        type="text" value={value}
                        onChange={this.setValue.bind(this)}
                        placeholder="Skriv här ..."
                    />
                    <button className="button-sendMsg" onClick={this.x.bind(this)}>
                        <IoIosSend className="send"/>
                    </button>
                </div>

                <Link to="/">
                    <span className="exit"><IoIosCloseCircle /> </span>
                </Link>
            </form>
        )
    }
}

export default SendMsg
