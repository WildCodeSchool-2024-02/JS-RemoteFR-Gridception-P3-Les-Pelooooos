import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Accueil from "./pages/Accueil";
import Profil from "./pages/Profil";
import Contact from "./pages/Contact";
import Connexion from "./pages/Connexion";
import Carte from "./pages/Carte";
import Inscription from "./pages/Inscription";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/profil",
        element: <Profil />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/connexion",
        element: <Connexion />,
      },
      {
        path: "/carte",
        element: <Carte />,
      },
      {
        path: "/inscription",
        element: <Inscription />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
