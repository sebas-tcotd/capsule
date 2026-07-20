"use client";

import { useEffect } from "react";

/**
 * Registers the CSS Houdini Paint Worklet for Squircles.
 * This must be a Client Component.
 */
export function SquircleRegistry() {
  useEffect(() => {
    if ("paintWorklet" in CSS) {
      // @ts-ignore - CSS.paintWorklet types are not yet standard in all TS versions
      CSS.paintWorklet.addModule("/worklets/squircle.js").catch((err: any) => {
        console.warn("Failed to load squircle worklet:", err);
      });
    }
  }, []);

  return null;
}
