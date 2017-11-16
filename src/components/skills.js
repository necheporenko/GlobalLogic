import React, { Component } from 'react';
import './index.css';

export default class Skills extends Component {
    showCircleSkills(level) {
        let arr = [];
        for (let i = 0; i < level; i++) {
            arr.push(<span className="active" key={i}/>)
        }
        for (let i = 0; i < (10 -level); i++) {
            arr.push(<span key={10-i}/>)
        }
        return arr;
    }

    render() {
        const {skillsArr} = this.props;

        return (
            <div className="section skills">
                <h3 className="title">Skills</h3>
                <div className="wrapper">
                    {skillsArr.map((item, index) => (
                        <div className="skill" key={index}>
                            <h3>{item.name}</h3>
                            <div className="skills-circle">
                                {this.showCircleSkills(item.level)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
