"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const HeroAtmosphere = dynamic(
  () =>
    import("@/features/home/hero-atmosphere").then(
      (mod) => mod.HeroAtmosphere,
    ),
  { ssr: false, loading: () => null },
);

type HeroSceneProps = {
  label: string;
  children: ReactNode;
};

export const HeroScene = ({ label, children }: HeroSceneProps) => (
  <div className="hero-scene relative">
    <HeroAtmosphere label={label} />
    <div className="relative z-10">{children}</div>
  </div>
);
