import React, {Component} from 'react';
import './index.css';

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    };

    handleSubmit(e) {
        e.preventDefault();
        const {name, email, message} = this.state;
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    }

    render() {
        return (
            <div className="section contact">
                <h3 className="title">Contact</h3>
                <div className="wrapper">
                    <div className="our-contacts">
                        <div>
                            <p>Phone number:</p>
                            <p className="lighter">+38066-66-66-666</p>
                        </div>
                        <div>
                            <p>Email:</p>
                            <p className="lighter">mail@gmail.com</p>
                        </div>
                        <div>
                            <p>Skype:</p>
                            <p className="lighter">mySkypeAcc</p>
                        </div>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name='name' onChange={this.handleChange} value={this.state.name} placeholder="Name"/>
                        <input type="text" name='email' onChange={this.handleChange} value={this.state.email} placeholder="Email"/>
                        <textarea name='message' onChange={this.handleChange} value={this.state.message} placeholder="Send a message"/>
                        <input type="submit" value="Send"/>
                    </form>

                </div>
            </div>
        );
    }
}
