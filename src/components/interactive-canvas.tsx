"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulseSpeed: number;
  pulseTimer: number;
};

export const InteractiveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let nodes: Node[] = [];
    const maxNodes = 65;
    const minDistance = 110;
    const mouse = { x: -1000, y: -1000, radius: 150 };

    // Check media query for accessibility
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
      initNodes();
    };

    const initNodes = () => {
      nodes = [];
      const nodeCount = Math.min(maxNodes, Math.floor((canvas.width * canvas.height) / 22000));
      
      for (let i = 0; i < nodeCount; i++) {
        const radius = Math.random() * 1.5 + 1;
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.35,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.35,
          radius,
          baseRadius: radius,
          pulseSpeed: Math.random() * 0.03 + 0.01,
          pulseTimer: Math.random() * Math.PI,
        });
      }
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Fetch dynamic color tokens from root styles
      const isDark = document.documentElement.dataset.theme === "dark";
      const lineColor = isDark ? "rgba(6, 182, 212, " : "rgba(14, 165, 233, ";
      const dotColor = isDark ? "rgba(139, 92, 246, " : "rgba(99, 102, 241, ";

      // Move and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (!node) continue;

        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          // Bounce off edges
          if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
          if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

          // Mouse interaction (gentle attraction)
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            node.x -= (dx / dist) * force * 0.45;
            node.y -= (dy / dist) * force * 0.45;
          }

          // Gentle pulsing
          node.pulseTimer += node.pulseSpeed;
          node.radius = node.baseRadius + Math.sin(node.pulseTimer) * 0.6;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${dotColor}${isDark ? "0.45" : "0.35"})`;
        ctx.fill();
      }

      // Draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        if (!n1) continue;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          if (!n2) continue;

          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < minDistance) {
            const alpha = (1 - dist / minDistance) * (isDark ? 0.08 : 0.06);
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `${lineColor}${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw connection to mouse
      if (mouse.x > 0 && mouse.y > 0) {
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          if (!node) continue;

          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * (isDark ? 0.12 : 0.09);
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(node.x, node.y);
            ctx.strokeStyle = `${lineColor}${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // Check visibility to save resources
    let observer: IntersectionObserver | null = null;
    const handleVisibility = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry && entry.isIntersecting) {
        cancelAnimationFrame(animationId);
        animationId = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(animationId);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Dynamic theme changes listener
    const observerConfig = { attributes: true, attributeFilter: ["data-theme"] };
    const themeObserver = new MutationObserver(() => {
      // Re-draw immediately on theme change to prevent visual jumps
      draw();
    });
    themeObserver.observe(document.documentElement, observerConfig);

    // Pause on offscreen
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(handleVisibility, { threshold: 0.1 });
      observer.observe(canvas);
    } else {
      animationId = requestAnimationFrame(draw);
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      themeObserver.disconnect();
      if (observer) observer.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-1000"
      style={{ opacity: 0.85 }}
    />
  );
};
