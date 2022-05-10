import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic'
import AddSongForm from './Components/AddSongForm/AddSongForm';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  const [songs, setSongs] = useState([]);
  
  
  async function getAllSongs(){
    let response  = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data)
    console.log(songs)
  }
  
  useEffect(() => {
    getAllSongs();
  }, [])
  
  async function createSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }

  // async function filterMusic(searchTerm){
  //   let unfilteredMusic = await axios.get('http://127.0.0.1:8000/api/music/')
  //   console.log(unfilteredMusic)
  //   let filteredMusic = unfilteredMusic.filter(function(element){
  //     if (element.includes(searchTerm)){
  //       return true
  //     }
  //     else{
  //       return false
  //     }})
  // }

  function filterMusic(searchTerm){
    let searchString = String(searchTerm)
    let filteredMusic = songs.filter(function(element){
      if (element.title.includes(searchTerm) ||
        element.artist.includes(searchTerm) ||
        element.album.includes(searchTerm) ||
        element.release_date.includes(searchTerm) ||
        element.genre.includes(searchTerm)){
        return true;
      }
      else{
        return false;
      }})
      setSongs(filteredMusic)
  }




  return (
    <div className="App">
      <div>
        <DisplayMusic parentSongs = {songs}/>
      </div>
      <div>
        <AddSongForm addSong={createSong} />
      </div>
      <div>
        <SearchBar submitSearch={filterMusic} />
      </div>
    </div>
  );
}

export default App;
