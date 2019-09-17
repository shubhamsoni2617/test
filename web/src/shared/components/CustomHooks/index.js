import { useState, useEffect } from 'react';

const useCustomWidth = () => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(()=>{
    window.addEventListener("resize",handleWidth);
    return (()=>{
      window.removeEventListener("resize",handleWidth);
    })
  })
  const handleWidth = () => {
    setWidth(window.innerWidth);
  }
  return ([width]);
};


export { useCustomWidth };
