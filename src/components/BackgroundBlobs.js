'use client';

import { useEffect, useRef } from 'react';

const blobConfigs = [
  { color: 'rgba(56,189,248,0.75)', style: { top: '-10%', right: '-5%', width: '42vw', height: '42vw' }, speed: 0.00006, phase: 0 },
  { color: 'rgba(14,165,233,0.65)', style: { top: '15%', right: '18%', width: '34vw', height: '34vw' }, speed: 0.00008, phase: 2 },
  { color: 'rgba(251,146,120,0.7)', style: { top: '40%', right: '-8%', width: '38vw', height: '38vw' }, speed: 0.00007, phase: 4 },
  { color: 'rgba(252,180,140,0.7)', style: { bottom: '-10%', left: '-8%', width: '36vw', height: '36vw' }, speed: 0.00009, phase: 1 },
];

export default function BackgroundBlobs() {
  const refs = useRef([]);

  useEffect(() => {
    let frameId;
    const tick = (time) => {
      refs.current.forEach((el, i) => {
        if (!el) return;
        const { speed, phase } = blobConfigs[i];
        const t = time * speed + phase;
        const x = Math.sin(t) * 220;
        const y = Math.cos(t * 0.8) * 180;
        const scale = 1 + Math.sin(t * 0.6) * 0.15;
        el.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
      });
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}
    >
      {blobConfigs.map((blob, i) => (
        <div
          key={i}
          ref={(el) => (refs.current[i] = el)}
          style={{
            position: 'absolute',
            borderRadius: '9999px',
            filter: 'blur(60px)',
            background: `radial-gradient(circle, ${blob.color}, transparent 70%)`,
            ...blob.style,
          }}
        />
      ))}
    </div>
  );
}