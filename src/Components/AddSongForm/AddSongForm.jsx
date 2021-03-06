import React, { useState } from 'react'
import './AddSongForm.css'


const AddSongForm = (props) => {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [release_date, setRelease_Date] = useState('')
    const [genre, setGenre] = useState('')
    const [likes, setLikes] = useState(0)

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre,
            likes: likes
        }
        console.log(newSong)
        props.addSong(newSong)
    }

    return(
        <form className='d-flex' onSubmit={handleSubmit}>
            <div className='search-box'>
                <label className='sr-only' htmlFor='songTitle'>Title</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div className='search-box'>
                <label>Artist</label>
                <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)} />
            </div>
            <div className='search-box'>
                <label>Album</label>
                <input type="text" value={album} onChange={(event) => setAlbum(event.target.value)} />
            </div>
            <div className='search-box'>
                <label>Genre</label>
                <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)} />
            </div>
            <div className='search-box'>
                <label>Likes</label>
                <input type="number" value={likes} onChange={(event) => setLikes(event.target.value)} />
            </div>
            <div className='search-box'>
                <label>Release Date</label>
                <input type="date" value={release_date} onChange={(event) => setRelease_Date(event.target.value)} />
            </div>
            <button className='btn btn-primary' type='submit'>Add Song</button>
        </form>
    )
}
export default AddSongForm;