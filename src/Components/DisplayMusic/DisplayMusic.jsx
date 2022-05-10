const DisplayMusic = (props) => {
    return (
        <table className="table table-striped table-hover"  style={{textAlign: 'center'}}>
            <thead className="table-dark">
                <tr>
                    <th scope="col">Entry</th>
                    <th scope="col">Title</th>
                    <th scope="col">Artist</th>
                    <th scope="col">Album</th>
                    <th scope="col">Release Date</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Likes</th>
                </tr>
            </thead>
            <tbody>
                {props.parentSongs.map((song, element) => {
                    return(
                        <tr key={element}>
                            <td>{element +1}</td>
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