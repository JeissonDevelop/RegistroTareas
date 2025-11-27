"use client";

import type React from "react";
import { useState, useEffect } from "react";
import ListaInstantes from "./ListaInstantes";

const Reloj: React.FC = () => {
  const [hora, setHora] = useState(new Date());
  const [instantes, setInstantes] = useState<string[]>([]);

  useEffect(() => {
    const intervalo = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(intervalo);
  }, []);

  const formatearHora = (fecha: Date) => {
    const horas = fecha.getHours().toString().padStart(2, "0");
    const minutos = fecha.getMinutes().toString().padStart(2, "0");
    const segundos = fecha.getSeconds().toString().padStart(2, "0");
    return `${horas}:${minutos}:${segundos}`;
  };

  const guardarInstante = () => {
    setInstantes([...instantes, formatearHora(hora)]);
  };

  const limpiarInstantes = () => {
    setInstantes([]);
  };

  return (
    <div className="reloj-main">
      {/* Header con título */}
      <div className="reloj-header">
        <h1 className="reloj-title">Reloj con Instantes</h1>
        <p className="reloj-subtitle">Captura momentos precisos en el tiempo</p>
      </div>

      {/* Contenedor principal con dos columnas */}
      <div className="reloj-container">
        {/* Sección del reloj */}
        <div className="reloj-section">
          <div className="clock-display">
            <div className="clock-label">Hora Actual</div>
            <div className="clock-time">{formatearHora(hora)}</div>
            <button className="btn-guardar" onClick={guardarInstante}>
              <span className="btn-icon">●</span>
              Guardar Instante
            </button>
          </div>
        </div>

        {/* Sección de instantes */}
        <div className="instantes-section">
          <ListaInstantes instantes={instantes} onLimpiar={limpiarInstantes} />
        </div>
      </div>
    </div>
  );
};

export default Reloj;
