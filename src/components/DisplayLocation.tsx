import React, { useEffect, useRef } from "react";

const DisplayLocation = (props: any) => {
  const canvasRef = useRef(null);
  const draw = (ctx: any, frameCount: any) => {
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // ctx.strokeStyles = "orange";
    // // draw a reactangular outline
    // ctx.strokeRect(10, 10, 150, 150);

    // // Clears the specified rectangular area, making it fully transparent.
    // ctx.clearRect(200, 200, 200, 200);

    // // fillrect draw a thickass rectangular
    // //ctx.strokeRect(50, 50, 50, 50);

    // // draw background
    // ctx.beginPath();
    // ctx.strokeStyle = "#FD0";
    // ctx.strokeRect(25, 25, 500, 500); // puter square
    // ctx.moveTo(262.5, 262.5);
    // ctx.strokeStyle = "red";
    // ctx.arc(0, 0, 100, 0, 0, true);
    // 339301.6	// 75729.9
    const Xval = 339301.6 / 1000 + 25 ; 
    const Yval = 75229.9 / 1000 + 25
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.strokeRect(25, 25, 500, 500); // puter square
    ctx.stroke();
    //ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    //ctx.moveTo(110, 75);
    //ctx.moveTo(262.5, 262.5);
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.arc(262.5, 262.5, 100, 100, Math.PI *2 , true); // Mouth (clockwise)
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.arc(Xval , Yval, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();

    // ctx.fillStyle = "#6C0";
    // ctx.fillRect(75, 0, 75, 75);
    // ctx.fillStyle = "#09F";
    // ctx.fillRect(0, 75, 75, 75);
    // ctx.fillStyle = "#F30";
    // ctx.fillRect(75, 75, 75, 75);
    // ctx.fillStyle = "#FFF";
  };
  useEffect(() => {
    const canvas = canvasRef.current as any;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId: any;
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} width="800px" height="800px" />;
};

export default DisplayLocation;
