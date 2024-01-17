import React, { useEffect, useRef, useState } from 'react'
import AnnouncementIcon from './assets/AnnouncementIcon';

const AnnoucementCard = () => {
  //TODO: add fetch announcement from db 
  const text = "hello world my name is john, john cena from john wick 3. hello world my name is john, john cena from john wick 3."

  return (
    <div 
      className='mb-8 relative solid-border solid-shadow rounded-[14px] px-5 py-7'
    >
      <AnnouncementIcon className='absolute translate-x-[-3rem] translate-y-[-3.75rem] w-[5rem] h-[5rem] '/>
      {text}
    </div>
  )
}

export default AnnoucementCard