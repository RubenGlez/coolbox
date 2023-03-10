import { createRoot } from "react-dom/client";
import App from "./App";

function render() {
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(<App />);
}

render();
