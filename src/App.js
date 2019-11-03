import React, {useRef} from 'react';
import './App.css';

function App() {
 
  const canvas = useRef(null);
  
  const drawSomething = () => {
    const surface = canvas.current;
    const draw2D = surface.getContext("2d");

    draw2D.clearRect(0, 0, window.innerWidth, window.innerHeight);

    var grd = draw2D.createLinearGradient(window.innerWidth/4, window.innerHeight/4, window.innerWidth/2, window.innerHeight/2);
    grd.addColorStop(0.5, "blue");
    grd.addColorStop(.75, "orange");    
    grd.addColorStop(1, "orangered");

    draw2D.fillStyle = grd;
    draw2D.shadowBlur = 20;
    draw2D.shadowColor = "darkslategrey";
    draw2D.fillRect(window.innerWidth/4, window.innerHeight/4, window.innerWidth/2, window.innerHeight/2);
    draw2D.strokeRect(window.innerWidth/4, window.innerHeight/4, window.innerWidth/2, window.innerHeight/2);
  }

  return (
    <div className="App">
      <canvas
       ref={canvas} 
       width={window.innerWidth} 
       height={window.innerHeight}
       onClick={()=>drawSomething()}
       />
    </div>
  );
}

export default App;
