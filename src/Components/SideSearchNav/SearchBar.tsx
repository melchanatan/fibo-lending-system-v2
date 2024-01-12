import React from 'react'
import SearchTagContainer from './SearchTagContainer'

const SearchBar = () => {
  return (
    <div className='border-primary border-[5px] rounded-[15px] p-1 flex solid-shadow'>
      <SearchTagContainer />
      <input className="px-2 focus:outline-none inline-block" type="text" placeholder="Search here!" />
    </div>
  )
}

export default SearchBar