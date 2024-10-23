import React from "react";
import "./styles/main.css";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import ammar from "./assets/mine.jpeg"

const Main = () => {
    return (
        <div className="main">
            <div className="main_container">
                <div className="main_content">
                    <div className="text">
                        <p>Hello Everyone !</p>
                        <h1>I am Ammar Abid</h1>
                        <p>Front-end Developer</p>
                        <div className="icons">
                            <Twitter className="icon" />
                            <Instagram className="icon" />
                            <Facebook className="icon" />
                            <LinkedIn className="icon" />
                        </div>
                        <div className="buttons">
                            <button>See Me</button>
                            <button>Hire Me</button>
                        </div>
                    </div>
                </div>
                <div className="main_img">
                    <img src={ammar} alt=" " />
                </div>
            </div>

        </div>
    )
}
export default Main;