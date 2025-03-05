import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Model } from "./Model";

/**
 * 3D Model Viewer Component
 *
 * Renders a 3D model with controlled camera movement.
 * The viewer restricts user interaction to only allow rotation around the Y axis.
 * On mobile devices, touch interactions with the canvas are completely disabled.
 *
 * @returns {JSX.Element} A canvas with the 3D model and orbit controls
 */
export default function Viewer() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices on component mount
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      const isMobileDevice =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent.toLowerCase()
        );
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div
      style={{
        height: "100%", // Fixed height to prevent blocking scrolling
        width: "100%",
        position: "relative",
        touchAction: "auto", // Allow normal touch behavior outside canvas
      }}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ fov: 50 }}
        style={{
          touchAction: "none", // Disable touch actions on the canvas itself
          pointerEvents: isMobile ? "none" : "auto", // Completely disable pointer events on mobile
        }}
      >
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
    </div>
  );
}
