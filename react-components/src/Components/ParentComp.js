import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegularComp';

class ParentComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Ammar",
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Ammar",
            })
        }, 3000);
    }

    render() {
        console.log("Parent Component Render");
        return (
            <div>
                I'm the Parent Component.
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp;