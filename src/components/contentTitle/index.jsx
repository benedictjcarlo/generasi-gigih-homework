import React from 'react';
import style from './style.css';

class ContentTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="head">
                <h1 className="content-title">{this.props.contentTitle}</h1>
            </div>
        )
    }
}

export default ContentTitle;