import { useEffect } from "react";
import {
  Engine3D,
  Scene3D,
  Object3D,
  Camera3D,
  LitMaterial,
  BoxGeometry,
  MeshRenderer,
  DirectLight,
  HoverCameraController,
  View3D,
  AtmosphericComponent
} from "@orillusion/core";
import { Stats } from "@orillusion/stats";
import "./App.css";

const App = () => {
  useEffect(() => {
    (async () => {
      await Engine3D.init();

      let scene: Scene3D = new Scene3D();
      scene.addComponent(Stats);

      let sky = scene.addComponent(AtmosphericComponent);
      sky.sunY = 0.6;

      let cameraObj: Object3D = new Object3D();
      let camera = cameraObj.addComponent(Camera3D);
      camera.perspective(60, Engine3D.aspect, 1, 5000.0);
      let controller = cameraObj.addComponent(HoverCameraController);
      controller.setCamera(0, 0, 15);
      scene.addChild(cameraObj);

      let light: Object3D = new Object3D();
      let component: DirectLight = light.addComponent(DirectLight);
      light.rotationX = 45;
      light.rotationY = 30;
      component.intensity = 1;
      scene.addChild(light);

      const cube: Object3D = new Object3D();
      let mr: MeshRenderer = cube.addComponent(MeshRenderer);
      mr.geometry = new BoxGeometry(5, 5, 5);
      mr.material = new LitMaterial();
      cube.rotationY = 45;
      scene.addChild(cube);

      let view = new View3D();
      view.scene = scene;
      view.camera = camera;

      Engine3D.startRenderView(view);
    })();
  }, []);

  return <></>;
};

export default App;
