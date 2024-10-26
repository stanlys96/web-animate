import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

function AppWithUI() {
  return (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<AppWithUI />);
