import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PublicContext from "./global/PublicContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <PublicContext>
            <App />
        </PublicContext>
    </StrictMode>
);
