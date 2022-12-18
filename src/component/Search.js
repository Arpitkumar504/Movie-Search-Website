import React from 'react'
import { useGlobalContext } from '../context/Contexts'

const Search = () => {
    const { query, setquery } = useGlobalContext();
    return (
        <div className='searchbox'>
            <h5>Search Your Favorite Movie</h5>
            <form action="#" onSubmit={(e) => { e.preventDefault() }}>
                <div className="search">
                    <input type="text" placeholder='Enter Movie Name' value={query} name='mname' autoComplete='off' onChange={(e) => { setquery(e.currentTarget.value) }} />
                </div>
            </form>
        </div>
    )
}

export default Search
