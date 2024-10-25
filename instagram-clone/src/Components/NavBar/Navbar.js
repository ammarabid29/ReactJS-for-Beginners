import React, { Component } from 'react';
import "./Navbar.css";
import { Grid2 } from '@mui/material';
import { HomeOutlined, Message, Search, FavoriteBorderOutlined } from "@mui/icons-material"
import dp from "../../images/dp.png"
import { Avatar } from '@mui/material';

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div>
                <div className='navbar_content'>
                    <Grid2 container spacing={0} className='grid_container'>
                        <Grid2 size={2}></Grid2>

                        <Grid2 size={3}>
                            <div className='left_logo'>
                                <i data-visualcompletion="" aria-label="" class="" role="img"></i>
                            </div>
                        </Grid2>

                        <Grid2 size={3}>
                            <input type='text' placeholder='Search' className='search' />
                        </Grid2>

                        <Grid2 size={3} className='icons_grid'>
                            <HomeOutlined className="navbar_img" />
                            <Message className="navbar_img" />
                            <Search className="navbar_img" />
                            <FavoriteBorderOutlined className="navbar_img" />
                            <Avatar src={dp} className="navbar_img" style={{ "maxHeight": "30px", "maxWidth": "30px" }}></Avatar>
                        </Grid2>
                        <Grid2 size={1}>

                        </Grid2>
                    </Grid2>
                </div>
            </div>
        )
    }
}

export default Navbar;