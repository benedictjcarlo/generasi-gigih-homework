import './App.css';
import data from "./data/songData";
import ContentTitle from './components/contentTitle';
import SongCard from './components/songCard';

function App() {
  return (
    <div className="app">
      <ContentTitle contentTitle="Sputify" />
      <div className="albums">
        <SongCard imgUrl={data.album.images[0].url} songTitle={data.name} artistName={data.album.artists[0].name}/>
        <SongCard imgUrl={data.album.images[0].url} songTitle={data.name} artistName={data.album.artists[0].name}/>
        <SongCard imgUrl={data.album.images[0].url} songTitle={data.name} artistName={data.album.artists[0].name}/>
      </div>
    </div>
  );
}

export default App;