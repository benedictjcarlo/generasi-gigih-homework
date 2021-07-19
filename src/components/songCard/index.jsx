import React from 'react';
import style from './style.css';

class SongCard extends React.Component {
    constructor(props) {
        super(props);
        this.alert = this.alert.bind(this);
    }

    alert() {
        alert(`${this.props.songTitle} has been selected`)
    }

    render() {
        return (
            <div className="card-album">
                <img className="image" src = {this.props.imgUrl} alt = {this.props.imgUrl}/>
                <p className="title">{this.props.songTitle}</p>
                <p className="artist">{this.props.artistName}</p>
                <button onClick={this.alert}>Select</button>
            </div>
        )
    }
}

export default SongCard;