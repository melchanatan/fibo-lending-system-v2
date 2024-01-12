import React from 'react'
import {Color} from '@/utils/types/color.type';
import { useSelectedTag } from './SelectedTagProvider';

interface TabsToggleProps {
  label: string;
  color?: Color ;
}

const RecommendTag = ({label, color}: TabsToggleProps) => {
  const {selectedTag, setSelectedTag} = useSelectedTag();

  return (
    <a
      className='group relative overflow-hidden bg-white border-primary border-[5px] py-1 rounded-[15px] flex items-center gap-4 solid-shadow'
      onClick={() => {setSelectedTag({label: label, color: color})}}
    >
      
      {/* color dot inner */}
      <span className='left-[20px] bg-white absolute w-[18px] h-[18px] rounded-full z-[11] transition-all duration-300'
      style={
        {
           scale: selectedTag.label === label ? 1 : 0, 
        }
      }></span>

      {/* color dot outer*/}
      <span 
        className={`group-hover:!scale-[4] z-10 w-[20px] h-[20px] rounded-full absolute transition-all duration-500`}
        style={
          {
            backgroundColor: color ? color : "#000",
            width: selectedTag.label === label ? "120vw" : "20px", 
            height: selectedTag.label === label ? "120vw" : "20px",
            marginLeft: selectedTag.label === label ? "-20px" : "20px"
          }
      }></span>
      
      <span className='w-[40px]'></span>
      <p className='select-none font-primary font-semibold text-[18px] z-20'>{label}</p>
    </a>
  )
}

export default RecommendTag