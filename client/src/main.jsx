import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import AuthAdmin from "./components/AuthAdmin";

import App from "./App";
import Accueil from "./pages/Accueil";
import Profil from "./pages/Profil";
import Contact from "./pages/Contact";
import Connexion from "./pages/Connexion";
import Carte from "./pages/Carte";
import Inscription from "./pages/Inscription";
import Administrateur from "./pages/Administrateur";

const { VITE_API_URL } = import.meta.env;

const usersListLoader = async ({ params }) => {
  const response = await fetch(`${VITE_API_URL}/api/users/${params.id}`);

  const data = await response.json();
  return data;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Accueil /> },
      { path: "carte", element: <Carte /> },
      { path: "contact", element: <Contact /> },
      { path: "connexion", element: <Connexion /> },
      { path: "inscription", element: <Inscription /> },
      { path: "*", element: <h1>404 - Page non trouvée</h1> },

      // protected routes
      {
        path: "profil/:id",
        element: <Profil />,
        loader: usersListLoader,
      },
      {
        path: "administrateur",
        element: <AuthAdmin />,
        children: [
          {
            path: "",
            element: <Administrateur />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
