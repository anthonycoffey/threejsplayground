import React from "react";
import "../styles/globals.sass";
import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anthony Coffey - Fullstack Software Engineer",
  description: "Proudly powered by NEXT.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pressStart2P.className}>
      <body>{children}</body>
    </html>
  );
}
