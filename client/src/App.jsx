import { Outlet } from "react-router-dom";

import "./styles/template.scss";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app-container">
      <div className="app-content">
        <Outlet />
      </div>

      <NavBar />
    </div>
  );
}

export default App;
