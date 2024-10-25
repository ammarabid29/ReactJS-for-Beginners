import React, { Component } from 'react';
import "./StatusBar.css";
import { Avatar } from '@mui/material';
import statuspic from "../../images/status.enc"

export class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className='stausbar_container'>
                    <div className='status'>
                        <Avatar sx={{ width: 65, height: 65 }} className='statusbar_status' src={statuspic} />
                        <div className='statusbar_text'>Ammar</div>
                    </div>
                    <div className='status'>
                        <Avatar sx={{ width: 65, height: 65 }} className='statusbar_status' src={statuspic} />
                        <div className='statusbar_text'>Ammar</div>
                    </div>
                    <div className='status'>
                        <Avatar sx={{ width: 65, height: 65 }} className='statusbar_status' src={statuspic} />
                        <div className='statusbar_text'>Ammar</div>
                    </div>
                    <div className='status'>
                        <Avatar sx={{ width: 65, height: 65 }} className='statusbar_status' src={statuspic} />
                        <div className='statusbar_text'>Ammar</div>
                    </div>
                    <div className='status'>
                        <Avatar sx={{ width: 65, height: 65 }} className='statusbar_status' src={statuspic} />
                        <div className='statusbar_text'>Ammar</div>
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default StatusBar;