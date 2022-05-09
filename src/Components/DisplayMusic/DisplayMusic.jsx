const DisplayMusic = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Entry</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    <th>Likes</th>
                </tr>
            </thead>
            <tbody>
                {props.parentSongs.map((song, element) => {
                    return(
                        <tr key={element}>
                            <td>{song.id}</td>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td>{song.likes}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default DisplayMusic