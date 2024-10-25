import React, { Component } from 'react';
import Grid from "@mui/material/Grid"
import login_1 from "../../images/login_1.png"
import login_2 from "../../images/login_2.png"
import "./LoginPage.css"
import { Facebook } from "@mui/icons-material"
import gplay from "../../images/gplay.png"
import msoft from "../../images/msoft.png"

export class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <div className='loginpage_main'>
                            <div className='image_container'>
                                <div className='left_component'>
                                    <img src={login_1} alt='' className="base_image" width="450px" />
                                    <img src={login_2} alt='' className="overlay_image" />
                                </div>
                            </div>
                            <div>
                                <div className='right_component1'>
                                    <div className='right_logo'>
                                        <i data-visualcompletion="" aria-label="" class="" role="img"></i>
                                    </div>
                                    <div className='loginpage_sigin'>
                                        <input type="text" placeholder='Phone number,username or email' />
                                        <input type="password" placeholder='Password' />
                                        <button>Log In</button>
                                    </div>
                                    <div className='login_ordiv'>
                                        <div className='login_dividor'></div>
                                        <div className='login_or'>OR</div>
                                        <div className='login_dividor'></div>
                                    </div>
                                    <div className='login_fb'>
                                        <Facebook /><p>Login with Facebook</p>
                                    </div>
                                    <div className='login_forgt'>
                                        Forgot password?
                                    </div>
                                </div>
                                <div className='right_component2'>
                                    <p>Don't have an account? <span>Sign up</span></p>
                                </div>
                                <div className="right_component3">
                                    <p>Get the app.</p>
                                    <div className='imgs'>
                                        <img src={gplay} alt='' />
                                        <img src={msoft} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={2}></Grid>

                </Grid>
            </div>
        )
    }
}

export default LoginPage;