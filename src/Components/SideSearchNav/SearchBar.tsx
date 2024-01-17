import React from 'react'
import SearchTagContainer from './SearchTagContainer'
import SearchIcon from './assets/SearchIcon'
import { useSelectedTag } from './SelectedTagProvider'

const SearchBar = () => {
  const {selectedTag} = useSelectedTag();

  return (
    <div className='solid-border rounded-[16px] p-[.4rem] flex flex-stretch solid-shadow relative mb-4'>
      <SearchTagContainer />
      <input className="px-2 focus:outline-none flex-grow min-w-0 pr-[40px] min-h-[30px]" 
      // style={{width: selectedTag.label ? "50%" : "100%"}}
      type="text" placeholder="Search here!" />
      <SearchIcon className="fill-gray-700 absolute right-2 top-[5px]"/>
    </div>
  )
}

export default SearchBar