"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import HomeScene from "@/components/HomeScene";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <HomeScene />
      </Canvas>
    </Suspense>
  );
}
