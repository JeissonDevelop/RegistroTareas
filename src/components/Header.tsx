import React, { useState } from 'react';

const Header: React.FC=() => {
    const [searchTerm, setSearchTerm] = useState('');
  return (
    <header className="header">
      <h1>Registro de Tareas</h1>

      <div className="search-container">
          <input
            type="text"
            className="searchInput"
            placeholder="Buscar ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="fas fa-search searchIcon"></i>
        </div>
    </header>
  );
}

export default Header
