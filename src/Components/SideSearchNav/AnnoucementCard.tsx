import React, { useEffect, useRef, useState } from 'react'
import CloseIcon from './assets/CloseIcon';

const AnnoucementCard = () => {
  //TODO: add fetch announcement from db 
  const text = "hello world my name is john, john cena from john wick 3. hello world my name is john, john cena from john wick 3."

  return (
    <div 
      className='mb-8 relative solid-border solid-shadow rounded-[14px] px-5 py-7'
    >
      <CloseIcon className='absolute translate-x-[-1.75rem] translate-y-[-2.25rem]'/>
      {text}
    </div>
  )
}

export default AnnoucementCard