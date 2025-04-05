import React from 'react';
import './Projects.css';
import ElectronicsStoreImg from './009.jpg';
import CorporateSiteImg from './008.jpg';
import TaskTrackerImg from './007.jpg';
import ForImg from './006.jpg';
import FiImg from './005.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Первая версия моего портфолио',
      image: ElectronicsStoreImg,
      description: 'Демонстрация базовых навыков веб-разработки и дизайна на начальном этапе обучения.',
      link: '-',
      tags: ['React.js','CSS3','Three.js']
    },
    {
      id: 2,
      title: 'Лендинг для студии автозвука',
      image: CorporateSiteImg,
      description: 'Этот проект стал важным этапом в моей карьере, доказавшим возможность создания качественных коммерческих решений.',
      link: '-',
      tags: ['HTML5', 'CSS3' ]
    },
    {
      id: 3,
      title: 'Сервис для оказания услуг',
      image: TaskTrackerImg,
      description: 'Проект стал социально значимым, помогая мигрантам избежать мошенничества и быстро адаптироваться в новой стране.',
      link: '-',
      tags: ['React.js', 'Node.js', 'React-i18next']
    },
    {
      id: 4,
      title: 'Сайт для аренды скутеров',
      image: ForImg,
      description: 'Проект стал визитной карточкой компании, увеличив узнаваемость бренда на рынке микромобильности.',
      link: '-',
      tags: ['React.js', 'Node.js', 'React-i18next']
    },
    {
      id: 5,
      title: 'Демонстрация профессионального роста',
      image: FiImg,
      description: 'Этот проект отражает мой профессиональный рост — от базового владения версткой до комплексного подхода в разработке',
      link: '-',
      tags: ['React.js', 'Node.js']
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Мои проекты</h1>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-image-link"
              >
                <img 
                  src={project.image}  
                  alt={`Демонстрация проекта ${project.title}`} 
                  className="project-image"
                />
                <div className="project-overlay">
                  <span className="project-link-text">Посетить сайт</span>
                </div>
              </a>
            </div>
            
            <div className="project-info">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;