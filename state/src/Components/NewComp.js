import React, { Component } from 'react';
import BellA from "./bellA.png";
import BellB from "./bellB.png";

export class NewComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Subscribe to SimpliLearn",
            sub: "Subscribe",
            imageUrl: BellB,
        }
    }

    ButtonChange = () => {
        this.setState({
            message: "Hit the bell icon to never miss an update",
            sub: "Subscribed",
        })
    }

    ImageChange = () => {
        this.setState({
            imageUrl: BellA,
            message: "Thank you! Happy learning",
        })
    }

    styles = {
        fontStyle: "italic",
        color: "purple",
    }

    render() {
        return (
            <div>
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.ButtonChange}>{this.state.sub}</button>
                <p />
                <img
                    style={{ width: "30px", height: "30px" }}
                    src={this.state.imageUrl} alt=''
                    onClick={this.ImageChange} >
                </img>
            </div>
        )
    }
}

export default NewComp;