import React from "react";

interface NavbarProps {
  setComponenteActivo: (nombre: string) => void;
  componenteActivo: string;
}

const Navbar: React.FC<NavbarProps> = ({
  setComponenteActivo,
  componenteActivo,
}) => {
  return (
    <nav className="navbar">
      <button
        className={`navbar-button ${
          componenteActivo === "reloj" ? "active" : ""
        }`}
        onClick={() => setComponenteActivo("reloj")}
      >
        Reloj
      </button>
      <button
        className={`navbar-button ${
          componenteActivo === "tareas" ? "active" : ""
        }`}
        onClick={() => setComponenteActivo("tareas")}
      >
        Tareas
      </button>
    </nav>
  );
};

export default Navbar;
