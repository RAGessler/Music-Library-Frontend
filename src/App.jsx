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
    <div className="app" style={{margin:'0 auto'}}>
      <div>
        <SearchBar submitSearch={filterMusic} />
      </div>
      <div>
        <DisplayMusic parentSongs = {songs}/>
      </div>
      <div className='add-song'>
        <AddSongForm addSong={createSong} />
      </div>
    </div>
  );
}

export default App;
