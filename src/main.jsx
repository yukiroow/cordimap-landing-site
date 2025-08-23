// Don't touch me
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import BiophysicalProfile from "./BiophysicalProfile";
import SocioCultural from "./SocioCultural";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
