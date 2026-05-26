export type MotionEnvironment = {
  reducedMotion: boolean;
  coarsePointer: boolean;
  saveData: boolean;
};

export const readMotionEnvironment = (): MotionEnvironment => {
  if (typeof window === "undefined") {
    return {
      reducedMotion: true,
      coarsePointer: true,
      saveData: false,
    };
  }

  const network = navigator as Navigator & {
    connection?: { saveData?: boolean };
  };

  return {
    reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    coarsePointer: window.matchMedia("(hover: none), (pointer: coarse)").matches,
    saveData: network.connection?.saveData === true,
  };
};

export const shouldEnableHeroAtmosphere = (environment: MotionEnvironment) =>
  !environment.reducedMotion &&
  !environment.coarsePointer &&
  !environment.saveData &&
  window.matchMedia("(min-width: 768px)").matches;

export const supportsHtmlInCanvas = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d") as
    | (CanvasRenderingContext2D & {
        drawElementImage?: unknown;
      })
    | null;

  return typeof context?.drawElementImage === "function";
};
