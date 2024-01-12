import React from 'react'
import {Color} from '@/utils/types/color.type';
import { useSelectedTag } from './SelectedTagProvider';

interface TabsToggleProps {
  label: string;
  color?: Color ;
}

const TagsToggle = ({label, color}: TabsToggleProps) => {
  const {selectedTag, setSelectedTag} = useSelectedTag();

  return (
    <a
      className='relative overflow-hidden bg-white border-primary border-[5px] py-1 rounded-[15px] flex items-center gap-4 solid-shadow'
      onClick={() => {setSelectedTag(label)}}
    >
      <span 
        className={`z-10 w-[20px] h-[20px] rounded-full absolute transition-all duration-500`}
        style={
          {
            backgroundColor: color ? color : "#000",
             width: selectedTag === label ? "100vh" : "20px", 
             height: selectedTag === label ? "100vh" : "20px",
             marginLeft: selectedTag === label ? "-20px" : "20px"
          }
      }>  
      </span>
      <span className='w-[40px]'></span>
      <p className='select-none font-primary font-semibold text-[18px] z-20'>{label}</p>
    </a>
  )
}

export default TagsToggle