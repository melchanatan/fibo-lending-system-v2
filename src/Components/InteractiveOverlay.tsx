import React, { use, useEffect, useRef, useState } from 'react'
import CloseIcon from './assets/CloseIcon'

export const InteractiveOverlay = ({handleClick}: {handleClick: () => void}) => {
  interface mousePosType {
    x: number;
    y: number;
  }

  // Create a state to store the mouse position
  const [mousePos, setMousePos] = useState({x: 1000, y: 1000} as mousePosType);

  // Listen to mouse movement and update mousePos state
  const buttonSize = 64
  useEffect( () => {
    
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // check mouse leave
    document.documentElement.addEventListener('mouseleave', () => {
      if (isMouseInside) {
        setIsMouseOffScreen(true)
      } 
    })

    // check mouse enter
    document.documentElement.addEventListener('mouseenter', () => {
      if (isMouseInside) {
        setIsMouseOffScreen(false)
      } 
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  })
  
  // Create a ref to the IconButton element
  const refElement = useRef<HTMLDivElement>(null);
  const refOverlay = useRef<HTMLDivElement>(null);
  const [isMouseOffScreen, setIsMouseOffScreen] = useState(false);
  const [isMouseInside, setIsMouseInside] = useState(false);

  // Move the IconButton element to the mouse position
  useEffect(() => {    
    // Move the IconButton element to the mouse position
    if (refElement.current) {
      refElement.current.style.left = `${mousePos.x - buttonSize / 2}px`;
      refElement.current.style.top = `${mousePos.y - buttonSize / 2}px`;
    }
  }, [mousePos]);



  // Render the IconButton element
  return (
    <>
      <div ref={refOverlay}
        onClick={handleClick}
        className='fixed w-[100vw] h-[100vh] bg-black/50 right-0 top-0 z-[100] cursor-none'
        onMouseEnter={() => setIsMouseInside(true)}
        onMouseLeave={() => setIsMouseInside(false)}
      >
        <div 
          ref={refElement}
          className={`transition-[scale,opacity] duration-100 flex justify-center items-center rounded-full bg-white solid-shadow cursor-none z-[101] fixed`}
          style={{
            width: `${buttonSize}px`, 
            height: `${buttonSize}px`,
            scale: isMouseOffScreen || !isMouseInside ? 0 : 1,
          }}
        >
          <CloseIcon />
        </div>
      </div>
    </>
  )
}