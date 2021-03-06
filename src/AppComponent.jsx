import React from 'react';
import data from "./data/songData";
import ContentTitle from './components/contentTitle';
import SongCard from './components/songCard';
import axios from 'axios';

class AppComponent extends React.Component {
    constructor(props){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
        const urlSearchParams = new URLSearchParams(window.location.hash.substring(1));
        let accessToken = urlSearchParams.get('access_token');

        console.log(accessToken);
        
        this.state = {
            isLogin: false,
            textInput: "",
            accessToken: accessToken,
            data: null
        }

        if (accessToken>0){
            console.log("Acces token length above 0")
            this.setState({
                isLogin: true,
                textInput: "",
                accessToken: accessToken,
                data: {}
            })
            console.log(this.state.accessToken)
        }
    }

    handleSearch(){
        //https://api.spotify.com/v1/search?q=queen&type=album&limit=30
        let query = this.state.textInput;
        let accessToken = `Bearer ${this.state.accessToken}`;
        const BASE_URL = "https://api.spotify.com/v1/search?q="
        console.log(accessToken)
        const getSpotifySearch = async() => {
            try {
                //https://api.spotify.com/v1/search?q=queen&type=album&limit=30
                const response = await axios.get(`${BASE_URL}${query}&type=album&limit=30`,{
                    headers: {
                        'Authorization': accessToken
                    }
                })
                console.log(response.data)
                this.setState({
                    data: response.data
                })
                console.log(this.state.data)
            } catch(error){
                console.error(error);
            }
        }
        getSpotifySearch();
    }
    
    handleChange(e){
        this.setState({textInput: e.target.value})
    }

    render(){
        let playlist;
        const theLink = `https://accounts.spotify.com/authorize?client_id=b8292b9d08ec42f0a27c0cae517b0cc0&response_type=token&redirect_uri=http://localhost:3000/`
        if (this.state.data != null){
            playlist = this.state.data.albums.items.map((item)=>{
                return (
                    <SongCard
                    imgUrl = {item.images[0].url}
                    songTitle = {item.name}
                    artist = {item.artists[0].name}
                    />
                )
            })
            console.log("Rendering")
            console.log(this.state.data)
        }
        return(
            <div className="App">
                <ContentTitle contentTitle="Sputify" />
                <a href={theLink}>LOGIN</a>
                <h3>Search your favorite albums!</h3>
                <br></br>
                <input type="text" value={this.state.textInput} onChange={this.handleChange}></input>
                <button onClick={this.handleSearch}>Search!</button>
                <br></br>

                {playlist}

            </div>
        )  
    }
}

export default AppComponent;