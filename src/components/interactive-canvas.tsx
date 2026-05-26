"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

const MAX_NODES = 18;
const TARGET_FRAME_MS = 1000 / 20;
const MAX_DPR = 1;

export const InteractiveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
    if (!ctx) return;

    let animationId = 0;
    let lastFrameTime = 0;
    let running = false;
    let nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let dotColor = "rgba(99, 102, 241, 0.28)";

    const syncDotColor = () => {
      const isDark = document.documentElement.dataset.theme === "dark";
      dotColor = isDark
        ? "rgba(139, 92, 246, 0.34)"
        : "rgba(99, 102, 241, 0.28)";
    };

    const initNodes = () => {
      nodes = [];
      const nodeCount = Math.min(
        MAX_NODES,
        Math.max(10, Math.floor((width * height) / 55000)),
      );

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          radius: Math.random() * 1.1 + 0.7,
        });
      }
    };

    const resizeCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    };

    const drawFrame = (timestamp: number) => {
      if (!running || !ctx) return;

      if (timestamp - lastFrameTime < TARGET_FRAME_MS) {
        animationId = requestAnimationFrame(drawFrame);
        return;
      }
      lastFrameTime = timestamp;

      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = dotColor;
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(drawFrame);
    };

    const start = () => {
      if (running || document.hidden) return;
      running = true;
      lastFrameTime = 0;
      animationId = requestAnimationFrame(drawFrame);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(animationId);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    const handleContentVisibility = (event: Event) => {
      const skipped = (event as Event & { skipped?: boolean }).skipped;
      if (skipped) {
        stop();
      } else if (!document.hidden) {
        start();
      }
    };

    resizeCanvas();
    syncDotColor();
    const themeObserver = new MutationObserver(syncDotColor);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    window.addEventListener("resize", resizeCanvas, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);
    container.addEventListener(
      "contentvisibilityautostatechange",
      handleContentVisibility,
    );

    if (!document.hidden) {
      start();
    }

    return () => {
      stop();
      themeObserver.disconnect();
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibility);
      container.removeEventListener(
        "contentvisibilityautostatechange",
        handleContentVisibility,
      );
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="canvas-layer fixed inset-0 h-dvh w-full pointer-events-none z-0"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
};
