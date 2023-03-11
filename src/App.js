import "./App.css";
import Home from "./Components/Home/Home";
import Nav from "./Components/NavBar/Nav";
import SolarR from "./Components/SolarRoof/SolarR";
import SolarP from "./Components/SolarPannels/SolarP";
import ModelY from "./Components/ModelY/ModelY";
import ModelX from "./Components/ModelX/ModelX";
import ModelS from "./Components/ModelS/ModelS";
import Model3 from "./Components/Model3/Model3";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="mod3"
            element={<Model3 />}
          />

          <Route
            path="mods"
            element={<ModelS />}
          />

          <Route
            path="modx"
            element={<ModelX />}
          />

          <Route
            path="mody"
            element={<ModelY />}
          />

          <Route
            path="solp"
            element={<SolarP />}
          />

          <Route
            path="solr"
            element={<SolarR />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
