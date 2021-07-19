import './App.css';
import data from "./data/songData";
import ContentTitle from './components/contentTitle';
import SongCard from './components/songCard';

const playlist = data.map((item) => {
  return (
    <SongCard 
    imgUrl={item.album.images[0].url} 
    songTitle={item.name}
    artistName={item.album.artists[0].name}
    />
  )
})

function App() {
  return (
    <div className="app">
      <ContentTitle contentTitle="Sputify" />
      <div className="albums">
        {playlist}
      </div>
    </div>
  );
}

export default App;