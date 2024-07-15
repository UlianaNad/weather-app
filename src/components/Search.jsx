import React from 'react'

const Search = ({search, setSearch, handleSearch}) => {
  return (
    <div className='search-engine'>
        <input type="text" className='city-search' placeholder='Enter city name' name='search' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <button className='search-btn' onClick={handleSearch}>Check weather</button>
    </div>
  )
}

export default Search