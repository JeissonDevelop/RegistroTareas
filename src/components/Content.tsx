import React from 'react';

interface TaskItemProps {
  imageSrc: string;
  imageAlt: string;
  time: string;
  iconClass: string;
  description: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ imageSrc, imageAlt, time, iconClass, description }) => {
  return (
    <div className="task-item">
      <div className="task-image">
        <img alt={imageAlt} src={imageSrc} className="task-image" />
      </div>
      <span className="task-time">
        <i className={iconClass}></i> {time}
      </span>
      <p className="task-description">{description}</p>
    </div>
  );
};

const Content: React.FC = () => {
  const tasks = [
    {
      imageSrc: "/assets/img/francisca.jpg",
      imageAlt: "Francisca",
      time: "Hace una hora",
      iconClass: "fas fa-fork-knife",
      description: "Fui a comer con amigos"
    },
    {
      imageSrc: "/assets/img/paco.jpg",
      imageAlt: "Paco",
      time: "10:00 am",
      iconClass: "fas fa-book",
      description: "Leí un artículo sobre tecnología"
    },
    {
      imageSrc: "/assets/img/quica.jpg",
      imageAlt: "Quica",
      time: "10:00 am",
      iconClass: "fas fa-pen",
      description: "Escribí notas sobre un proyecto importante"
    },
    {
      imageSrc: "/assets/img/curro.jpg",
      imageAlt: "Curro",
      time: "2:21 pm",
      iconClass: "fas fa-file-powerpoint",
      description: "Preparé la presentación para la reunión de mañana"
    }
  ];

  return (
    <div className="tasks-container">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          imageSrc={task.imageSrc}
          imageAlt={task.imageAlt}
          time={task.time}
          iconClass={task.iconClass}
          description={task.description}
        />
      ))}
    </div>
  );
};

export default Content;
