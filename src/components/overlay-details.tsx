"use client";

import { useEffect, useRef, type ReactNode } from "react";

const MENU_SELECTOR = "[data-overlay-menu]";

type OverlayDetailsProps = {
  children: ReactNode;
  className?: string;
};

export const OverlayDetails = ({ children, className }: OverlayDetailsProps) => {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const details = ref.current;
    if (!details) {
      return;
    }

    const closeSiblings = () => {
      document.querySelectorAll<HTMLDetailsElement>(MENU_SELECTOR).forEach((item) => {
        if (item !== details) {
          item.open = false;
        }
      });
    };

    const onToggle = () => {
      if (details.open) {
        closeSiblings();
      }
    };

    const onDocumentClick = (event: MouseEvent) => {
      if (!details.open) {
        return;
      }

      const target = event.target as Node;
      if (!details.contains(target)) {
        details.open = false;
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && details.open) {
        details.open = false;
      }
    };

    details.addEventListener("toggle", onToggle);
    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      details.removeEventListener("toggle", onToggle);
      document.removeEventListener("click", onDocumentClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <details className={className} data-overlay-menu ref={ref}>
      {children}
    </details>
  );
};
