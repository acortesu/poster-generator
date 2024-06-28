import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const WrapperP5 = ({ posterSketch }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const p5Instance = new p5(posterSketch, canvasRef.current);
    return () => {
      p5Instance.remove();
    };
  }, [posterSketch]);

  return <div ref={canvasRef}></div>;
};

export default WrapperP5;
