"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface ImageMagnifierProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  zoom?: number;
  lensSize?: number;
}

export default function ImageMagnifier({
  src,
  alt,
  width,
  height,
  zoom = 2.5,
  lensSize = 76,
}: ImageMagnifierProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [showLens, setShowLens] = useState(false);
  const [lensX, setLensX] = useState(0);
  const [lensY, setLensY] = useState(0);
  const [displayWidth, setDisplayWidth] = useState(0);
  const [displayHeight, setDisplayHeight] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const half = lensSize / 2;
    const rawX = e.clientX - rect.left;
    const rawY = e.clientY - rect.top;

    const x = Math.max(half, Math.min(rawX, rect.width - half));
    const y = Math.max(half, Math.min(rawY, rect.height - half));

    setLensX(x);
    setLensY(y);
    setDisplayWidth(rect.width);
    setDisplayHeight(rect.height);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      onMouseEnter={() => setShowLens(true)}
      onMouseLeave={() => setShowLens(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        className="block w-full h-auto select-none"
      />

      {showLens && (
        <div
          className="pointer-events-none absolute z-20 rounded-full border-2 border-white shadow-2xl overflow-hidden"
          style={{
            width: `${lensSize}px`,
            height: `${lensSize}px`,
            left: `${lensX - lensSize / 2}px`,
            top: `${lensY - lensSize / 2}px`,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${displayWidth * zoom}px ${displayHeight * zoom}px`,
            backgroundPosition: `-${lensX * zoom - lensSize / 2}px -${lensY * zoom - lensSize / 2}px`,
            boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
          }}
        >
          <div className="absolute inset-0 bg-white/10" />
          <div className="absolute top-[10%] left-[18%] w-[35%] h-[20%] rounded-full bg-white/20 blur-sm" />
        </div>
      )}
    </div>
  );
}
