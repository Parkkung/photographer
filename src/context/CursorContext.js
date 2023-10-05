import React, { useState, useEffect, createContext } from "react";


// create context
export const CursorContext = createContext();

const CursorProvider = ({ children }) => {

  const [cursorPos, setcursorPos] = useState({
    x: 0,
    y: 0,
  });

  // cursor bg state
  const [cursorBG, setcursorBG] = useState('default')
  const mobileViewPortIsActive = window.innerWidth < 768;

  useEffect(() => {
    if (!mobileViewPortIsActive) {
      const move = (e) => {
        setcursorPos({
          x: e.clientX,
          y: e.clientY,
        })
      }
      window.addEventListener('mousemove', move)
  
      return () => {
        window.removeEventListener('mousemove', move)
      }
    } else {
      setcursorBG('none');
    }
  })


  const cursorVariants = {
    default: {
      x: cursorPos.x -16,
      y: cursorPos.y -16,
      backgroundColor: '#0e1112'
    },

    text: {
      width: '150px',
      height: '150px',
      x: cursorPos.x -72,
      y: cursorPos.y -72,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
    },

    none: {
      width: 0,
      height: 0,
      backgroundColor: 'rgba(255, 255, 255, 1)',
    }
  }

  const mouseEnterHandler = () => {
    setcursorBG('text');
  };

  const mouseLeaveHandler = () => {
    setcursorBG('default');
  };

  return(
    <CursorContext.Provider value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler}}>
      {children}
    </CursorContext.Provider>
  )
};

export default CursorProvider;
