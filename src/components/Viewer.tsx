import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Model } from "./Model";

export default function Viewer() {
  const ref = useRef(null);

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage preset="soft" environment="studio" adjustCamera={false}>
          <Model rotation={[0.15, 0.3, 0.5]} scale={0.035} />
        </Stage>
      </Suspense>
      <OrbitControls
        ref={ref}
        autoRotate={true}
        enableRotate={false}
        enablePan={false}
        enableZoom={false}
      />
    </Canvas>
  );
}
