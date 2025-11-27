import type React from "react";

interface InstanteItemProps {
  hora: string;
  index: number;
}

const InstanteItem: React.FC<InstanteItemProps> = ({ hora, index }) => {
  return (
    <div className="instante-item">
      <div className="instante-number">{index}</div>
      <div className="instante-time">{hora}</div>
      <div className="instante-badge">guardado</div>
    </div>
  );
};

export default InstanteItem;
