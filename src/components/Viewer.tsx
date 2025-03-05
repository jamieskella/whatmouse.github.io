import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Model } from "./Model";

/**
 * 3D Model Viewer Component
 *
 * Renders a 3D model with controlled camera movement.
 * The viewer restricts user interaction to only allow rotation around the Y axis.
 *
 * @returns {JSX.Element} A canvas with the 3D model and orbit controls
 */
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
        enableRotate={true}
        enablePan={false}
        enableZoom={false}
        // Lock vertical rotation by setting min and max polar angles to the same value
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
