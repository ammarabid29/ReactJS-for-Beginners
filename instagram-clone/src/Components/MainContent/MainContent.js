import React, { Component } from 'react';
import "./MainContent.css";
import { Grid2 } from '@mui/material';
import StatusBar from '../StatusBar/StatusBar';
import MainPage from '../MainPage/MainPage';

export class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div>
                <Grid2 container spacing={0} >
                    <Grid2 size={3}></Grid2>
                    <Grid2 size={7} className="maincontent_container">
                        <StatusBar />
                        <MainPage />
                    </Grid2>
                    <Grid2 size={1}></Grid2>
                    <Grid2 size={1}></Grid2>
                </Grid2>
            </div>
        )
    }
}

export default MainContent;