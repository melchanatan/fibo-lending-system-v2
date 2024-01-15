import React from 'react'
import { InteractiveOverlay } from './InteractiveOverlay'

const BackgroundDarken = () => {
  return (
    <div className='fixed w-[100vw] h-[100vh] bg-black/50 z-40 right-0 top-0'>
        <InteractiveOverlay>
        </InteractiveOverlay>
    </div>
  )
}

export default BackgroundDarken