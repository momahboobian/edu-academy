"use client";

import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorSm = useRef<HTMLDivElement>(null);
  const cursorLg = useRef<HTMLDivElement>(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX =
        mouseX - (cursorSm.current?.clientWidth ?? 0) / 2;
      positionRef.current.mouseY =
        mouseY - (cursorSm.current?.clientHeight ?? 0) / 2;
      positionRef.current.destinationX =
        mouseX - (cursorLg.current?.clientWidth ?? 0) / 2;
      positionRef.current.destinationY =
        mouseY - (cursorLg.current?.clientHeight ?? 0) / 2;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      cursorSm.current!.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      cursorLg.current!.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };

    const animationFrameId = requestAnimationFrame(followMouse);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="cs-cursor_lg" ref={cursorLg}></div>
      <div className="cs-cursor_sm" ref={cursorSm}></div>
    </>
  );
}
