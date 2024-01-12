import React from 'react'
import { useSelectedTag } from './SelectedTagProvider'
import RemoveButton from './RemoveButton'

const SearchTag = ({tagName}: {tagName: string}) => {
  return (
    <li className='bg-red-200 flex-row inline-flex items-center rounded-[8px] px-2 justify-between'>
        <p>{tagName}</p>
        <RemoveButton/>
    </li>
  )
}

export default SearchTag