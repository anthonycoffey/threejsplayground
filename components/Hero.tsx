"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D } from "@react-three/drei";
import { Mesh } from "three";

function Box(props: any) {
  const ref = useRef<Mesh>(); // Replace 'Mesh' with the appropriate Three.js class
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.y += 1.5 * delta));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      rotateOnAxis={[0, 1, 0]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function WelcomeMsg(props: any) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Define a rotation speed (adjust as needed)
  const rotationSpeed = 1;

  useFrame((state, delta) => {
    // Rotate the object around the vertical axis
    if (ref.current) {
      ref.current.geometry.center();
      ref.current.rotation.y += rotationSpeed * delta;
    }
  });
  return (
    <Text3D
      {...props}
      ref={ref}
      font={"/PressStart2P.json"}
      scale={3}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      Hey Y&apos;all
      <meshNormalMaterial />
    </Text3D>
  );
}

export default function Hero() {
  return (
    <Canvas>
      <ambientLight intensity={1000} position={[0, 0, 0]} />
      {/*<pointLight position={[0, 0, 0]} />*/}
      <WelcomeMsg position={[-2, 0, -10]} />
    </Canvas>
  );
}
