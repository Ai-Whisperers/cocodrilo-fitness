import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Complejo Cocodrilo — Fitness y Bienestar en Asunción",
  description: "Gimnasio completo, pileta climatizada y las mejores instalaciones para tu entrenamiento",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">{children}</body>
    </html>
  );
}
