import React, { useEffect, useRef } from "react";
import { useStateContext } from "../context/ContextProvider";

const DisplayLocation = (props: any) => {
  const canvasRef = useRef(null);
  const { displayX, displayY, onClickToDisplay } = useStateContext() as any;
  const draw = (ctx: any, frameCount: any, canvas: any) => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.fillRect(25, 25, 500, 500); // puter square
    ctx.stroke();
  
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.arc(262.5, 262.5, 100, 100, Math.PI * 2, true); // Mouth (clockwise)
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(262.5, 262.5, 5, 5, Math.PI * 2, true); // Mouth (clockwise)
    ctx.fill();

    if (displayX && displayY) {
      const Xval = Number(displayX) / 1000 + 25;
      const Yval = Number(displayY) / 1000 + 25;

      ctx.beginPath();
      ctx.strokeStyle = "green";
      ctx.arc(Xval, Yval, 5, 0, Math.PI * 2, true); // Right eye
      ctx.stroke();
    }

  };

  useEffect(() => {
    const canvas = canvasRef.current as any;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId: any;
    const render = () => {
      frameCount++;
      draw(context, frameCount, canvas);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [displayX, displayY]);


  return <canvas ref={canvasRef} width="800px" height="800px" />;
};

export default DisplayLocation;
