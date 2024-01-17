import React from 'react'
import { useSelectedTag } from './SelectedTagProvider'
import RemoveButton from './RemoveButton'
import { TagType } from './tag.type'

const SearchTag = ({label, color}: TagType) => {
  return (
    <li 
    className='flex-row inline-flex items-center rounded-[7px] px-2 justify-between font-medium'
    style={{backgroundColor: color}}
    >
        <p>{label}</p>
        <RemoveButton/>
    </li>
  )
}


export default SearchTag