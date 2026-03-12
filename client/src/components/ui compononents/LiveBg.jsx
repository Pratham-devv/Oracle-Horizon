import React, { useRef, useEffect } from 'react';


export function Starfield() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [], frame;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 180 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        opacity: Math.random(),
        speed: Math.random() * 0.2 + 0.05
      }));
    };

    const draw = () => {
      ctx.fillStyle = "#0f0814";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(s => {
        s.y -= s.speed;
        if (s.y < 0) s.y = canvas.height;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${Math.abs(Math.sin(Date.now() * 0.001 + s.opacity))})`;
        ctx.fill();
      });
      frame = requestAnimationFrame(draw);
    };

    init(); draw();
    window.addEventListener('resize', init);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', init); };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
}