"use client";

import type React from "react";
import InstanteItem from "./InstanteItem";

interface ListaInstantesProps {
  instantes: string[];
  onLimpiar: () => void;
}

const ListaInstantes: React.FC<ListaInstantesProps> = ({
  instantes,
  onLimpiar,
}) => {
  if (instantes.length === 0) {
    return (
      <div className="instantes-container empty">
        <h3 className="instantes-title">Instantes Guardados</h3>
        <div className="empty-state">
          <div className="empty-icon">◐</div>
          <p className="empty-text">Sin instantes guardados aún</p>
          <p className="empty-subtext">
            Presiona "Guardar Instante" para comenzar
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="instantes-container">
      <div className="instantes-header">
        <h3 className="instantes-title">Instantes Guardados</h3>
        <span className="instantes-count">{instantes.length}</span>
      </div>

      <div className="instantes-list">
        {instantes.map((instante, index) => (
          <InstanteItem key={index} hora={instante} index={index + 1} />
        ))}
      </div>

      {instantes.length > 0 && (
        <button className="btn-limpiar" onClick={onLimpiar}>
          Limpiar Instantes
        </button>
      )}
    </div>
  );
};

export default ListaInstantes;
