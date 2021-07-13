import React from 'react';
import './App.css';
import data from "./data";

function App() {
  return (
    <div className="app">
      <div className="head">
        <h1>Sputify</h1>
      </div>
      <div className="albums">
        <div className="album-1">
          <div className="card-album">
            <img className="image" src = {data.album.images[0].url}/>
            <p className="title t1">{data.name}</p>
            <p className="artist">{data.album.artists[0].name}</p>
            <button>Select</button>
          </div>
        </div>
        <div className="album-2">
          <div className="card-album">
            <img className="image" src = {data.album.images[0].url}/>
            <p className="title t2">{data.album.name}</p>
            <p className="artist">{data.album.artists[0].name}</p>
            <button>Select</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
