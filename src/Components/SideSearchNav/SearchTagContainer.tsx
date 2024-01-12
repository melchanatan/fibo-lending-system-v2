import React from 'react'
import { useSelectedTag } from './SelectedTagProvider'
import SearchTag from './SearchTag'

const SearchTagContainer = () => {
    const {selectedTag} = useSelectedTag()
    return (
        <ul>
            {
            selectedTag ? 
            <SearchTag tagName={selectedTag}/> 
            : null
            }
        </ul>
    )
}

export default SearchTagContainer