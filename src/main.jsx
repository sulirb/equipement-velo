import "./global.scss";
import { createRoot } from "react-dom/client";
import App from "./router";
import { WindowSizeProvider } from "./utils/windowSizeContext";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <WindowSizeProvider>
    <App tab="home" />
  </WindowSizeProvider>
);
