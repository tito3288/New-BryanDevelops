"use client";

import { useRef, useEffect } from "react";

const PARTICLE_COUNT = 60;

const DARK_COLORS = [
  "rgba(129, 140, 248, 0.6)",
  "rgba(167, 139, 250, 0.5)",
  "rgba(99, 102, 241, 0.5)",
  "rgba(192, 132, 252, 0.4)",
  "rgba(255, 255, 255, 0.3)",
  "rgba(129, 140, 248, 0.3)",
];

const LIGHT_COLORS = [
  "rgba(99, 102, 241, 0.25)",
  "rgba(139, 92, 246, 0.2)",
  "rgba(129, 140, 248, 0.2)",
  "rgba(167, 139, 250, 0.18)",
  "rgba(79, 70, 229, 0.15)",
  "rgba(139, 92, 246, 0.12)",
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

export default function FloatingDots({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const COLORS = variant === "light" ? LIGHT_COLORS : DARK_COLORS;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resize();

    const initParticles = () => {
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    };

    initParticles();

    let rafId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particlesRef.current) {
        if (!isScrollingRef.current) {
          p.x += p.vx;
          p.y += p.vy;
        }

        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    const handleResize = () => {
      resize();
      initParticles();
    };

    const handleScroll = () => {
      isScrollingRef.current = true;
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(scrollTimeoutRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-[3]"
      style={{ willChange: "transform", transform: "translateZ(0)" }}
      aria-hidden
    />
  );
}
