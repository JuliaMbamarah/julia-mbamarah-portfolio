import { useRef } from "react";

/**
 * Represents a drawing canvas.
 *
 * @component
 */

const Draw = () => {
  // Create a reference to the canvas element
  const canvasRef = useRef(null);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 100, left: 0 }}
      width={window.innerWidth}
      height={window.innerHeight - 100}
    />
  );
};

export default Draw;
