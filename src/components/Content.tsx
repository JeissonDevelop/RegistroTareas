import React from 'react';

const Content: React.FC=() => {
    return (
      <div className="tasks-container">
        <div className="task-item">
          <div className="task-image">
            <img
              alt="Francisca"
              src="/assets/img/francisca.jpg"
              className="task-image"
            />
          </div>
          <span className="task-time">Hace una hora</span>
          <p className="task-description">Fui a comer con amigos</p>
        </div>
        <div className="task-item">
          <div className="task-image">
            <img
              alt="Paco"
              src="/assets/img/paco.jpg"
              className="task-image"
            />
          </div>
          <span className="task-time">10:00 am</span>
          <p className="task-description">Leí un artículo sobre tecnología</p>
        </div>
        <div className="task-item">
          <div className="task-image">
            <img
              alt="Quica"
              src="/assets/img/quica.jpg"
              className="task-image"
            />
          </div>
          <span className="task-time">10:00 am</span>
          <p className="task-description">Escribí notas sobre un proyecto importante</p>
        </div>
        <div className="task-item">
          <div className="task-image">
            <img
              alt="Curro"
              src="/assets/img/curro.jpg"
              className="task-image"
            />
          </div>
          <span className="task-time">2:21 pm</span>
          <p className="task-description">Preparé la presentación para la reunión de mañana</p>
        </div>
      </div>
    );
  }

export default Content;
