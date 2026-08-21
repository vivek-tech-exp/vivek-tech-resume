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

    const handleClose = () => {
      if (details.open) {
        details.open = false;
      }
    };

    const onDocumentPointerDown = (event: PointerEvent) => {
      if (!details.open) {
        return;
      }

      const target = event.target as HTMLElement | null;
      if (!target) {
        return;
      }

      // If clicked on the backdrop or outside details, close the menu
      if (target.classList?.contains("overlay-backdrop") || !details.contains(target)) {
        handleClose();
        return;
      }

      // If clicked inside details, but outside the summary and outside the overlay menu panel
      const summary = details.querySelector("summary");
      if (summary && summary.contains(target)) {
        return;
      }

      const panel = details.querySelector(".overlay-menu-panel, [role='menu'], nav");
      if (panel && !panel.contains(target)) {
        handleClose();
      }
    };

    const onDocumentClick = (event: MouseEvent) => {
      if (!details.open) {
        return;
      }

      const target = event.target as HTMLElement | null;
      if (!target) {
        return;
      }

      if (target.classList?.contains("overlay-backdrop") || !details.contains(target)) {
        handleClose();
      }
    };

    const onFocusOut = (event: FocusEvent) => {
      if (!details.open) {
        return;
      }

      const relatedTarget = event.relatedTarget as Node | null;
      if (!relatedTarget || !details.contains(relatedTarget)) {
        handleClose();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && details.open) {
        handleClose();
        const summary = details.querySelector("summary");
        summary?.focus();
      }
    };

    details.addEventListener("toggle", onToggle);
    details.addEventListener("focusout", onFocusOut);
    document.addEventListener("pointerdown", onDocumentPointerDown);
    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      details.removeEventListener("toggle", onToggle);
      details.removeEventListener("focusout", onFocusOut);
      document.removeEventListener("pointerdown", onDocumentPointerDown);
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
