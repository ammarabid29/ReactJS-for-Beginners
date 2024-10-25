import React, { Component } from 'react';
import "./Post.css"

export class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='post_container'>
                {/* {Header} */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}

export default Post;