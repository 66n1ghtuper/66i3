import React from 'react';
import './Projects.css';
import ElectronicsStoreImg from './009.jpg';
import CorporateSiteImg from './008.jpg';
import TaskTrackerImg from './007.jpg';
import ForImg from './006.jpg';
import FiImg from './005.jpg';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('projects.first_version_title'),
      image: ElectronicsStoreImg,
      description: t('projects.first_version_description'),
      link: '-',
      tags: ['React.js', 'CSS3', 'Three.js']
    },
    {
      id: 2,
      title: t('projects.landing_title'),
      image: CorporateSiteImg,
      description: t('projects.landing_description'),
      link: '-',
      tags: ['HTML5', 'CSS3']
    },
    {
      id: 3,
      title: t('projects.service_title'),
      image: TaskTrackerImg,
      description: t('projects.service_description'),
      link: '-',
      tags: ['React.js', 'Node.js', 'React-i18next']
    },
    {
      id: 4,
      title: t('projects.scooter_rental_title'),
      image: ForImg,
      description: t('projects.scooter_rental_description'),
      link: '-',
      tags: ['React.js', 'Node.js', 'React-i18next']
    },
    {
      id: 5,
      title: t('projects.professional_growth_title'),
      image: FiImg,
      description: t('projects.professional_growth_description'),
      link: '-',
      tags: ['React.js', 'Node.js','React-i18next']
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">{t('projects.title')}</h1>
      
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
                  <span className="project-link-text">{t('projects.visit_site')}</span>
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
