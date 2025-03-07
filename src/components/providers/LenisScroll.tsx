"use client";

import Lenis from "lenis";
import { ReactNode, useEffect } from "react";

const LenisProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <>{children}</>;
};

export default LenisProvider;
