// src/components/ProductIcon.tsx
import React from "react";

interface ProductIconProps {
  icon: string;
  className?: string;
  size?: number;
}

// Mostra direttamente l'emoji come testo, usando le emoji carine fornite dall'utente
export function ProductIcon({ icon, className = "h-6 w-6", size = 32 }: ProductIconProps) {
  return <span className={`emoji ${className}`} style={{ fontSize: size }}>{icon}</span>;
}
// ...nessuna graffa finale superflua