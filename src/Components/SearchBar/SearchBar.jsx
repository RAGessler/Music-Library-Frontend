import React, { useState } from 'react'
const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    function handleSubmit(event){
        event.preventDefault();
        let newSearchTerm = searchTerm
        console.log(newSearchTerm)
        props.submitSearch(newSearchTerm)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Input Search Term</label>
                <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
            </div>
            <button type='submit'>Search</button>
        </form>
    )
}
export default SearchBar;