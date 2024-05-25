import { useEffect, useRef } from "react";

function App() {
  return (
    <div className="flex h-screen gap-2">
      <div className="w-[15%] bg-gray-200 p-4 border-r border-gray-300">
        Left Panel Content
      </div>
      <div className="w-[85%] bg-gray-100 p-2">
        <CanvasElement />
      </div>
    </div>
  );
}

export default App;

function CanvasElement() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawGrid = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = window.innerHeight * 0.98;

      const data =
        '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"> \
          <defs> \
              <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse"> \
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" stroke-width="0.5" /> \
              </pattern> \
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"> \
                  <rect width="80" height="80" fill="url(#grid)" /> \
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" stroke-width="1" /> \
              </pattern> \
          </defs> \
          <rect width="100%" height="100%" fill="url(#grid)" /> \
      </svg>';

      const DOMURL = window.URL || window.webkitURL || window;

      const img = new Image();
      const svg = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
      const url = DOMURL.createObjectURL(svg);

      img.addEventListener("load", () => {
        ctx.drawImage(img, 0, 0);
        DOMURL.revokeObjectURL(url);
      });
      console.log({ url });
      img.src = url;
    };

    drawGrid();
  }, []);

  return (
    <canvas
      id="canvas"
      ref={canvasRef}
      className="border-gray-300/80 border-1 w-full h-full"
    />
  );
}
