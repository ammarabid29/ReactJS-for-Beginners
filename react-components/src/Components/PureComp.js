import React, { Component } from 'react';

// pure component improve performance 
export class PureComp extends Component {
    render() {
        console.log("Pure Component Render");
        return (
            <div>
                I'm a Pure Component. {this.props.name}
            </div>
        )
    }
}

export default PureComp;