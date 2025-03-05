import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Model } from "./Model";

export default function Viewer() {
  const ref = useRef(null);

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage preset="soft" intensity={1} environment="studio">
          <Model rotation={[0, 0.1, 0.25]} />
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate enableZoom={false} />
    </Canvas>
  );
}
