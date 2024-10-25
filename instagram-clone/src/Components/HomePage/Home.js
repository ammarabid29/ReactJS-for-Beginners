import React, { Component } from 'react';
import "./Home.css";
import Navbar from '../NavBar/Navbar.js';
import MainContent from '../MainContent/MainContent.js';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div>
                <Navbar />
                <MainContent />
            </div>
        )
    }
}

export default Home;