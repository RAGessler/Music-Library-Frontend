import React, { useState } from 'react'



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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div>
                <label>Artist</label>
                <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)} />
            </div>
            <div>
                <label>Album</label>
                <input type="text" value={album} onChange={(event) => setAlbum(event.target.value)} />
            </div>
            <div>
                <label>Release Date</label>
                <input type="date" value={release_date} onChange={(event) => setRelease_Date(toString(event.target.value))} />
            </div>
            <div>
                <label>Genre</label>
                <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)} />
            </div>
            <div>
                <label>Likes</label>
                <input type="number" value={likes} onChange={(event) => setLikes(event.target.value)} />
            </div>
        </form>
    )
}