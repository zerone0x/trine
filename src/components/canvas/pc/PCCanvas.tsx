"use client";

import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState, lazy, useRef } from "react";
function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed()}%</Html>;
}
const PC = lazy(() => import("./PC"));

export default function PCCanvas() {
  return (
    <div className="w-screen h-[40vh] md:h-[55vh] lg:h-[70vh] ">
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [4, 2, 6],
        }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2} // 允许相机稍微向下
            minPolarAngle={Math.PI / 2} // 允许相机稍微向上
            // enabled={false}
          />
          <PC />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}
