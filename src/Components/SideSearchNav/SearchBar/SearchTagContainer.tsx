import React from 'react'
import { useSelectedTag } from '../SelectedTagProvider'
import SearchTag from './SearchTag'

const SearchTagContainer = () => {
    const {selectedTag, setSelectedTag} = useSelectedTag()

    return (
        <ul >
            {
            selectedTag.label ? 
            <SearchTag label={selectedTag.label} color={selectedTag.color}/> 
            : null
            }
        </ul>
    )
}

export default SearchTagContainer