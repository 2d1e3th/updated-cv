import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

// Native dialog supplies modal semantics, focus containment, and background inertness.
export default function Dialog({
  open,
  onClose,
  title,
  children,
  className = "",
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    const dialog = ref.current;
    const previousFocus = document.activeElement;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    return () => {
      if (dialog.open) dialog.close();
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected)
        previousFocus.focus();
    };
  }, [open]);
  return (
    <dialog
      ref={ref}
      className={`field-dialog ${className}`}
      aria-label={title}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {open && (
        <motion.div
          className="dialog-inner"
          initial={reduce ? false : { opacity: 0, y: 16, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: reduce ? 0 : 0.25 }}
        >
          <button
            autoFocus
            className="dialog-close"
            onClick={onClose}
            aria-label={`Close ${title}`}
          >
            <X size={20} aria-hidden="true" />
          </button>
          {children}
        </motion.div>
      )}
    </dialog>
  );
}
