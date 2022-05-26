import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import {FavoritesContextProvider} from "./context/FavoritesContext";

createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <AuthContextProvider>
            <FavoritesContextProvider>
                <App />
            </FavoritesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </React.StrictMode>
);
