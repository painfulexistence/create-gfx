import { useRef, useEffect } from 'react'
import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Vector3 } from '@babylonjs/core';
import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { MeshBuilder } from "@babylonjs/core/Meshes";
import './App.css';

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const engine = new Engine(canvas, true);

      let scene = new Scene(engine);
      let camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
      camera.setTarget(Vector3.Zero());
      camera.attachControl(canvas, true);

      let light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);
      let box = MeshBuilder.CreateBox("box1", { size: 1 }, scene);

      engine.runRenderLoop(() => {
        scene.render();
      });

      window.addEventListener('resize', () => {
        engine.resize();
      });
    }
  }, []);

  return (
    <canvas ref={canvasRef} style=\{{ width: 800, height: 450 }}/>
  )
}

export default App
