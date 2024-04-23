import { Application, Graphics } from "pixi.js";
import "./style.css";

const app = new Application();
await app.init({ width: 800, height: 450, antialias: true });
document.getElementById("app").appendChild(app.canvas);

const graphics = new Graphics();
graphics.rect(375, 200, 50, 50);
graphics.fill(0xffffff);

app.stage.addChild(graphics);

app.ticker.add((ticker) => {});
