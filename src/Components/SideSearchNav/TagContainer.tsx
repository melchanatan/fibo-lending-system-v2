import React from 'react'
import {Color} from '@/utils/types/color.type';
import TagToggle from './TagToggle';

const TagContainer = ({tagNames}: {tagNames: string[]}) => {

  const tagColors: Color[] = ["#FFA07A", "#FF7F50", "#FFD700", "#98FB98", "#ADD8E6", "#DDA0DD"]

  return (
    <div className='flex flex-col gap-2'>
      {
        tagNames.map( (name, index) => <TagToggle label={name} color={tagColors[index]}/>)
      }
    </div>
  )
}

export default TagContainer;
