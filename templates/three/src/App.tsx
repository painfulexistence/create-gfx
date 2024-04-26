import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";

const App = () => {
    return (
        <Canvas style=\{{ width: 800, height: 450 }}>
            <Suspense fallback={null}>
                <directionalLight position={[0, 5, 0]} />
                <mesh rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            </Suspense>
        </Canvas>
    );
};

export default App;
