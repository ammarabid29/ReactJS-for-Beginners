import React, { Component } from 'react';

class ClassProps extends Component {
    render() {
        return (
            <div>
                <h1> Hey {this.props.name} from {this.props.place}! Welcome to SimpliLearn. </h1>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default ClassProps;