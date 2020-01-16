import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

class LogIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            value: ''
        }
    }

    setName = e => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        const { value } = this.state

        return (
            <div className="div-login">
                <form className="login-form">
                    <h1 className="h1-chatApp">Chat App</h1>
                    <h1 className="h1-login">Logga in</h1>
                    <div>
                        <input 
                            placeholder="Enter Your Name"
                            className="input-form"
                            type="text"
                            value={value}
                            onChange={this.setName.bind(this)}
                            minLength="1"
                            maxLength="12"
                        />
                    </div>
                    <Link onClick={event => {
                        let valid = /^[a-z\d\s_-]{1,12}$/i.test(value);
                        if (!valid) {
                            event.preventDefault();
                        }
                    }} to={"/chat/" + value}>
                        <button className="button-login" type="submit">LogIn</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default LogIn
