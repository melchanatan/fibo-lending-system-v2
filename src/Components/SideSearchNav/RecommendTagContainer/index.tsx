import React from 'react'
import {Color} from '@/utils/types/color.type';
import TagToggle from './RecommendTag';

const RecommendTagContainer = ({tagNames, containerName}: {tagNames: string[], containerName: string | undefined}) => {

  const tagColors: Color[] = ["#FFA07A", "#FF7F50", "#FFD700", "#98FB98", "#ADD8E6", "#DDA0DD"]

  return (
    <div className='flex flex-col gap-2'>
        <div className="flex items-center gap-2">
          <h5 className='font-primary font-semibold'>{containerName}</h5>
          <span className='h-[3px] flex-1 bg-primary'></span>
        </div>

      {
        tagNames.map( (name, index) => <TagToggle label={name} color={tagColors[index]} key={`${name}tag`}/>)
      }
    </div>
  )
}

export default RecommendTagContainer;
