import { useEffect, useRef } from 'react';
import * as ROT from 'rot-js';
import './App.css';

const App = () => {
  const rotContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const display = new ROT.Display({
      width: 80,
      height: 30
    });
    rotContainerRef.current!.appendChild(display.getContainer()!);

    display.draw(6, 0.5, 'Hello World!', '#fff', '#000');

    return () => {
      rotContainerRef.current!.removeChild(display.getContainer()!);
    }
  }, []);

  return (
    <div ref={rotContainerRef} />
  )
}

export default App
