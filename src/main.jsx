import ReactDOM, { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import {App} from "./components/App.jsx";

import './assets/main.css';

createRoot(document.getElementById("app")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
