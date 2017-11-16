import React, { Component } from 'react';
import './index.css';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="wrapper">
                    <div className="header">
                        <div className="logo"/>
                        <div className="menu">
                            <ul>
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Skills</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="representation">
                        <h1>NAME SURNAME</h1>
                        <h3>FRONT-END DEVELOPER</h3>
                    </div>
                </div>
            </div>
        );
    }
}
