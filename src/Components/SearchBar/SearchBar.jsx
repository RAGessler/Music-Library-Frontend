import React, { useState } from 'react'
import './SearchBar.css'
const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    function handleSubmit(event){
        event.preventDefault();
        let newSearchTerm = searchTerm
        console.log(newSearchTerm)
        props.submitSearch(newSearchTerm)
    }

    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark' >
            <h1 className='hero-text'>Music Library</h1>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='input-group mb-3'>
                    <input className='form-control' placeholder='Search Keywords' type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
                    <div className='input-group-append'>
                        <button className='btn btn-outline-secondary' type='submit'>Search</button>
                    </div>
                </div>
            </form>
        </nav>
    )
}
export default SearchBar;