"use client";
import React from "react";

export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow relative">
        <button onClick={onClose} className="absolute top-1 right-2">✕</button>
        {children}
      </div>
    </div>
  );
}
