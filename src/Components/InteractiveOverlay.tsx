import React, { use, useEffect, useRef, useState } from 'react'
import CloseIcon from './assets/CloseIcon'

export const InteractiveOverlay = ({handleClick, className}: {handleClick: () => void, className?: string}) => {
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

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  })
  
  // Create a ref to the IconButton element
  const refElement = useRef<HTMLDivElement>(null);
  const refOverlay = useRef<HTMLDivElement>(null);
  const [isMouseInside, setIsMouseInside] = useState(false);

  // Move the IconButton element to the mouse position
  useEffect(() => {    
    // Move the IconButton element to the mouse position
    if (refElement.current) {
      refElement.current.style.left = `${mousePos.x - buttonSize / 2}px`;
      refElement.current.style.top = `${mousePos.y - buttonSize / 2}px`;
    }
  }, [mousePos]);

  // Check component is inside the bound of the overlay
  useEffect(() => {
    if (refElement.current && refOverlay.current) {
      const overlayRect = refOverlay.current.getBoundingClientRect();
      const elementRect = refElement.current.getBoundingClientRect();
      if (elementRect.x <= overlayRect.x || elementRect.x + elementRect.width >= overlayRect.x + overlayRect.width || elementRect.y <= overlayRect.y || elementRect.y + elementRect.height > overlayRect.y + overlayRect.height) {
        setIsMouseInside(false);
      } else {
        setIsMouseInside(true);
      }
    }
  }, [mousePos])

  const [mouseHovering, setMouseHovering] = useState(false);

  // Render the IconButton element
  return (
    <>
      <div ref={refOverlay}
        onClick={handleClick}
        className={className}
        onMouseEnter={() => setMouseHovering(true)}
        onMouseLeave={() => setMouseHovering(false)}
      >
        <div 
          ref={refElement}
          className={`transition-[scale,opacity] duration-100 flex justify-center items-center rounded-full bg-white solid-shadow cursor-none z-[0] fixed`}
          style={{
            width: `${buttonSize}px`, 
            height: `${buttonSize}px`,
            scale: isMouseInside && mouseHovering ? 1 : 0,
          }}
        >
          <CloseIcon />
        </div>
      </div>
    </>
  )
}