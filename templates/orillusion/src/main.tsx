import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// TODO: enable strict mode after https://forum.orillusion.com/topic/142 is resolved
// Also see https://github.com/Orillusion/orillusion/issues/176
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
