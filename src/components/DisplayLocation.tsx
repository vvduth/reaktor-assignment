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
    ctx.font = "20px serif";
    ctx.strokeStyle = "red";
    ctx.strokeText("Inside the red circle is no flyzone", 50, 50);
    ctx.strokeStyle = "blue";
    ctx.strokeText("Blue dot is the captureing device aka the nest location", 50, 100);
    ctx.strokeStyle = "green";
    ctx.strokeText("The green dot is the violated drone position", 50, 450);
    ctx.strokeStyle = "black";
    ctx.strokeText("The yellow area is the range of the capture device", 50, 500);

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
