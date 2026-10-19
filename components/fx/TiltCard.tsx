"use client";

import { useRef } from "react";
import { motion, useSpring, type HTMLMotionProps } from "framer-motion";

type TiltCardProps = HTMLMotionProps<"div"> & {
  /** Max tilt in degrees. */
  max?: number;
};

// A motion.div that leans toward the mouse. The tilt goes through Framer's
// own rotateX/rotateY so it composes with whileInView/initial transforms
// instead of fighting them over the inline `transform`.
export default function TiltCard({ max = 6, style, onPointerMove, onPointerLeave, className, ...rest }: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rx = useSpring(0, { stiffness: 220, damping: 20 });
  const ry = useSpring(0, { stiffness: 220, damping: 20 });

  return (
    <motion.div
      ref={ref}
      {...rest}
      className={`spot ${className ?? ""}`}
      style={{ ...style, rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onPointerMove={(e) => {
        onPointerMove?.(e);
        if (e.pointerType !== "mouse" || !ref.current) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const r = ref.current.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry.set(px * max * 2);
        rx.set(-py * max * 2);
      }}
      onPointerLeave={(e) => {
        onPointerLeave?.(e);
        rx.set(0);
        ry.set(0);
      }}
    />
  );
}
