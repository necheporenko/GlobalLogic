import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="wrapper">
                    <div>
                        <p>Mobile: +38066-66-66-666</p>
                        <p>Email: mail@gmail.com</p>
                        <p>Skype: mySkypeAcc</p>
                    </div>
                    <div className="logo"/>
                </div>
            </div>
        );
    }
}
