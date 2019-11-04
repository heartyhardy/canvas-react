import React, {useRef, useEffect} from 'react';
import './box.css';

const Box = ({x, y, width, height, draw}) => {
    
    const drawSomething = () => {
        const surface = canvas.current;
        const ctx = surface.getContext("2d");

        ctx.fillStyle = "blue";
        ctx.shadowBlur = 20;
        ctx.shadowColor = "darkslategrey";

        ctx.fillRect(x, y, width, height);
    }

    const canvas = useRef(null);

    useEffect(() => {
        if(draw) drawSomething();
    })


    return(
        <div className="box-container">
            <canvas ref={canvas} width={window.innerWidth} height={window.innerHeight} />
        </div>        
    )
}

export default Box;