"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "idle" | "left" | "right" | "up" | "down";

const FRAMES: Record<Direction, string> = {
  idle:  "₍^. .^₎⟆",
  left:  "(•˕ •マⳊ",
  right: "Ⳋヤ• ˕•)",
  up:    "₍^˄ ˄^₎⟆",
  down:  "₍^- -^₎⟆",
};

export default function CursorDog() {
  const [dogPos, setDogPos] = useState({ x: -200, y: -200 });
  const [dir, setDir] = useState<Direction>("idle");
  const dogRef = useRef({ x: -200, y: -200 });
  const targetRef = useRef({ x: -200, y: -200 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const tick = () => {
      const dog = dogRef.current;
      const target = targetRef.current;

      const newX = dog.x + (target.x - dog.x) * 0.07;
      const newY = dog.y + (target.y - dog.y) * 0.07;
      dogRef.current = { x: newX, y: newY };
      setDogPos({ x: newX, y: newY });

      const dx = target.x - newX;
      const dy = target.y - newY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 20) {
        setDir("idle");
      } else {
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
        if (angle > -55 && angle < 55) setDir("right");
        else if (angle > 55 && angle < 125) setDir("down");
        else if (angle > 125 || angle < -125) setDir("left");
        else setDir("up");
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 select-none"
      style={{
        left: dogPos.x + 14,
        top: dogPos.y - 8,
        fontFamily: "monospace",
        fontSize: "13px",
        color: "#aaa",
        whiteSpace: "pre",
      }}
    >
      {FRAMES[dir]}
    </div>
  );
}
