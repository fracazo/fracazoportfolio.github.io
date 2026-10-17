"use client";

import { useEffect } from "react";

/** Every case study body, on its own page and in the side sheet. */
const GUARDED = ".case-study-content, .cs";

function inGuarded(node: Node | null) {
  const el = node instanceof Element ? node : node?.parentElement;
  return Boolean(el?.closest(GUARDED));
}

function isField(el: Element | null) {
  return Boolean(el?.closest("input, textarea, select, [contenteditable='true']"));
}

/**
 * Makes lifting case study text deliberately awkward. CSS already turns off
 * selection and image dragging inside GUARDED; this covers the routes around
 * it: select-all while a case study is on screen, copy or cut of any
 * selection that touches one, and the right-click menu over one. Form fields
 * keep their normal behaviour.
 *
 * It is a speed bump, not a lock. View source, reader mode and dev tools all
 * still reach the text, and nothing stops a screenshot.
 */
export function CopyGuard() {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "a" || !(e.metaKey || e.ctrlKey)) return;
      if (isField(document.activeElement)) return;
      if (document.querySelector(GUARDED)) e.preventDefault();
    };

    const onCopy = (e: ClipboardEvent) => {
      if (isField(document.activeElement)) return;
      const sel = document.getSelection();
      if (!sel || sel.rangeCount === 0) return;
      for (let i = 0; i < sel.rangeCount; i++) {
        const range = sel.getRangeAt(i);
        const guarded = document.querySelectorAll(GUARDED);
        const touches =
          inGuarded(range.commonAncestorContainer) ||
          [...guarded].some((el) => range.intersectsNode(el));
        if (touches) {
          e.preventDefault();
          return;
        }
      }
    };

    const onContextMenu = (e: MouseEvent) => {
      if (inGuarded(e.target as Node)) e.preventDefault();
    };

    const onDragStart = (e: DragEvent) => {
      if (inGuarded(e.target as Node)) e.preventDefault();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("copy", onCopy);
    document.addEventListener("cut", onCopy);
    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("copy", onCopy);
      document.removeEventListener("cut", onCopy);
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  return null;
}
