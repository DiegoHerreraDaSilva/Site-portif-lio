import { useRef, useEffect } from 'react';

const CELL = 60;
const RADIUS = 200;
const LIFT = 8;

export function HeroGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mm = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduced = mm.matches;

    let w = 0;
    let h = 0;
    let cols = 0;
    let rows = 0;
    let dpr = 1;

    const state: {
      mx: number; my: number;
      lifts: Float64Array;
      glows: Float64Array;
    } = { mx: -999, my: -999, lifts: new Float64Array(0), glows: new Float64Array(0) };

    function resize() {
      dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + 'px';
      canvas!.style.height = h + 'px';
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / CELL) + 1;
      rows = Math.ceil(h / CELL) + 1;
      const count = cols * rows;
      state.lifts = new Float64Array(count);
      state.glows = new Float64Array(count);
    }

    function onMouse(e: MouseEvent) {
      state.mx = e.clientX;
      state.my = e.clientY;
    }

    function onLeave() {
      state.mx = -999;
      state.my = -999;
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouse, { passive: true });
    window.addEventListener('mouseleave', onLeave);

    mm.addEventListener('change', (e) => { reduced = e.matches; });

    let prev = performance.now();

    function loop(now: number) {
      const dt = Math.min(now - prev, 50);
      prev = now;
      const step = dt / 16;

      const { mx, my } = state;
      const isReduced = reduced;

      if (!isReduced) {
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const idx = r * cols + c;
            const cx = c * CELL + CELL / 2;
            const cy = r * CELL + CELL / 2;
            const dx = cx - mx;
            const dy = cy - my;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < RADIUS) {
              const t = 1 - dist / RADIUS;
              const ease = t * t * (3 - 2 * t);
              state.lifts[idx] += (ease * LIFT - state.lifts[idx]) * 0.25 * step;
              state.glows[idx] += (ease - state.glows[idx]) * 0.25 * step;
            } else {
              state.lifts[idx] += (0 - state.lifts[idx]) * 0.2 * step;
              state.glows[idx] += (0 - state.glows[idx]) * 0.2 * step;
            }
          }
        }
      }

      ctx!.clearRect(0, 0, w, h);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = r * cols + c;
          const x = c * CELL;
          const y = r * CELL;
          const lift = isReduced ? 0 : state.lifts[idx];
          const glow = isReduced ? 0 : state.glows[idx];

          if (glow > 0.01) {
            ctx!.save();
            ctx!.shadowBlur = 16 * glow;
            ctx!.shadowColor = `oklch(0.58 0.16 150 / ${0.6 * glow})`;
            ctx!.strokeStyle = `oklch(0.58 0.16 150 / ${glow})`;
            ctx!.lineWidth = 1.5;
            ctx!.strokeRect(x, y - lift, CELL, CELL);
            ctx!.restore();
          }

          ctx!.strokeStyle = `oklch(0.22 0.008 150)`;
          ctx!.lineWidth = 1;
          ctx!.strokeRect(x, y - lift, CELL, CELL);
        }
      }

      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('mouseleave', onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  );
}
