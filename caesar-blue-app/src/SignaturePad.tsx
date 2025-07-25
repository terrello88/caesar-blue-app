import React, { useRef } from "react";

const SignaturePad = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const startDrawing = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isDrawing = true;

    const draw = (event: MouseEvent) => {
      if (!isDrawing || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#000";
      ctx.lineTo(event.clientX - rect.left, event.clientY - rect.top);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(event.clientX - rect.left, event.clientY - rect.top);
    };

    const stopDrawing = () => {
      isDrawing = false;
      ctx?.beginPath();
      window.removeEventListener("mousemove", draw);
      window.removeEventListener("mouseup", stopDrawing);
    };

    window.addEventListener("mousemove", draw);
    window.addEventListener("mouseup", stopDrawing);
  };

  return (
    <div>
      <p className="mb-2 font-semibold">Customer Signature:</p>
      <canvas
        ref={canvasRef}
        width={400}
        height={150}
        className="border rounded bg-white"
        onMouseDown={startDrawing}
      />
      <div className="mt-2">
        <button onClick={clearCanvas} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
          Clear Signature
        </button>
      </div>
    </div>
  );
};

export default SignaturePad;
