import React, {useEffect, useState} from 'react';
import './App.css';
import Box from './components/box/box';

function App() {

  const [mpos, setMpos] = useState({
    x: 0,
    y: 0
  })

  const [isDrawing, setDrawing] = useState(false);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMpos(() => ({x: e.x , y: e.y}));
    })

    window.addEventListener("mousedown" , (e) => {
      setDrawing(() => true);
    })

    window.addEventListener("mouseup" , (e) => {
      setDrawing(() => false);
    })

  }, [])

  return (
    <div className="App">

       <Box x={mpos.x} y={mpos.y} width={200} height={200} draw={isDrawing} />
    </div>
  );
}

export default App;
