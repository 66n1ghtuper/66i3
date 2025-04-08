import React from 'react';
import './ProjectsForSale.css';
import { useTranslation } from 'react-i18next';

const ProjectsForSale = () => {
  const { t } = useTranslation();
  
  return (
    <div className="projects-for-sale">
      <h1 className="projects-for-sale-title">{t('projects_for_sale_page.title')}</h1>
      <div className="projects-for-sale-content">
        <p className="projects-for-sale-text">
          {t('projects_for_sale_page.no_projects')}
        </p>
      </div>
    </div>
  );
};

export default ProjectsForSale;