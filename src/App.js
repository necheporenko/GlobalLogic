import React, {Component} from 'react';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import {SKILLS_LIST} from './constants/skills';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Home/>
                <About/>
                <Skills
                    skillsArr={SKILLS_LIST}
                />
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default App;
