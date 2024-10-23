import React from "react";
import "./styles/section.css";
import ammar from "./assets/mine.jpeg";

const Section = () => {
    return (
        <div className="sections">
            <div className="sections_container">
                <div className="section_img">
                    <img src={ammar} alt=" " />
                </div>

                <div className="sections_content">
                    <h1>Ammar Abid</h1>
                    <p>Experience in web and mobile apps development</p>
                    <p>JavaScript development</p>
                    <p>React JS development</p>
                    <p>Flutter development</p>
                </div>
            </div>
        </div>
    );
}
export default Section;