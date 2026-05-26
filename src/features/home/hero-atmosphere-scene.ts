import {
  AmbientLight,
  DirectionalLight,
  HTMLTexture,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  WebGLRenderer,
} from "three";

const TARGET_FRAME_MS = 1000 / 30;
const MAX_DPR = 1.25;

const createLabelElement = (label: string) => {
  const element = document.createElement("div");
  element.className = "hero-atmosphere-label";
  element.textContent = label;
  return element;
};

export const mountHeroAtmosphere = (
  container: HTMLElement,
  label: string,
): (() => void) => {
  let width = container.clientWidth;
  let height = container.clientHeight;

  if (width === 0 || height === 0) {
    return () => undefined;
  }

  const scene = new Scene();
  const camera = new PerspectiveCamera(42, width / height, 0.1, 20);
  camera.position.set(0, 0, 3.2);

  const renderer = new WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, MAX_DPR));
  renderer.setSize(width, height, false);
  renderer.domElement.className = "hero-atmosphere-canvas";
  container.append(renderer.domElement);

  const ambient = new AmbientLight(0xffffff, 0.85);
  const keyLight = new DirectionalLight(0xffffff, 0.55);
  keyLight.position.set(2, 2, 4);
  scene.add(ambient, keyLight);

  const geometry = new PlaneGeometry(2.4, 0.72, 1, 1);
  const material = new MeshStandardMaterial({
    color: 0x94a3b8,
    metalness: 0.15,
    roughness: 0.72,
    transparent: true,
    opacity: 0.55,
  });

  let htmlTexture: HTMLTexture | undefined;
  let labelElement: HTMLDivElement | undefined;

  const loadHtmlTexture = async () => {
    if (typeof HTMLTexture !== "function") {
      return;
    }

    try {
      labelElement = createLabelElement(label);
      htmlTexture = new HTMLTexture(labelElement);
      material.map = htmlTexture;
      material.color.setHex(0xffffff);
      material.opacity = 0.92;
      material.needsUpdate = true;
    } catch {
      // HTML-in-Canvas is experimental; geometry fallback remains active.
    }
  };

  void loadHtmlTexture();

  const panel = new Mesh(geometry, material);
  panel.position.set(0.85, 0.15, 0);
  panel.rotation.set(-0.08, -0.28, 0.04);
  scene.add(panel);

  let animationId = 0;
  let lastFrameTime = 0;
  let running = false;
  let visible = true;
  let elapsed = 0;

  const renderFrame = (timestamp: number) => {
    if (!running) {
      return;
    }

    if (timestamp - lastFrameTime < TARGET_FRAME_MS) {
      animationId = window.requestAnimationFrame(renderFrame);
      return;
    }

    lastFrameTime = timestamp;
    elapsed += TARGET_FRAME_MS / 1000;
    panel.rotation.y = -0.28 + Math.sin(elapsed * 0.45) * 0.06;
    panel.rotation.x = -0.08 + Math.cos(elapsed * 0.35) * 0.03;
    panel.position.y = 0.15 + Math.sin(elapsed * 0.5) * 0.04;

    renderer.render(scene, camera);
    animationId = window.requestAnimationFrame(renderFrame);
  };

  const start = () => {
    if (running || !visible || document.hidden) {
      return;
    }

    running = true;
    lastFrameTime = 0;
    animationId = window.requestAnimationFrame(renderFrame);
  };

  const stop = () => {
    running = false;
    window.cancelAnimationFrame(animationId);
  };

  const resize = () => {
    width = container.clientWidth;
    height = container.clientHeight;

    if (width === 0 || height === 0) {
      return;
    }

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, MAX_DPR));
    renderer.setSize(width, height, false);
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);

  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
      if (visible) {
        start();
      } else {
        stop();
      }
    },
    { threshold: 0.05 },
  );
  intersectionObserver.observe(container);

  const handleVisibility = () => {
    if (document.hidden) {
      stop();
    } else if (visible) {
      start();
    }
  };

  document.addEventListener("visibilitychange", handleVisibility);

  if (!document.hidden) {
    start();
  }

  return () => {
    stop();
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
    document.removeEventListener("visibilitychange", handleVisibility);
    renderer.dispose();
    geometry.dispose();
    material.dispose();
    htmlTexture?.dispose();
    labelElement?.remove();
    renderer.domElement.remove();
  };
};
