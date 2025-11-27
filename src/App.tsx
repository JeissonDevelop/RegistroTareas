import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Reloj from "./components/Reloj";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
  const [componenteActivo, setComponenteActivo] = useState("tareas");

  return (
    <div className="App">
      <Navbar
        setComponenteActivo={setComponenteActivo}
        componenteActivo={componenteActivo}
      />

      {componenteActivo === "tareas" && <Content />}
      {componenteActivo === "reloj" && <Reloj />}
      <Footer />
    </div>
  );
};

export default App;
