import React, { useState, useEffect } from 'react';
import './PulseLine.css';
import MenuSidebar from './MenuSidebar';
import Header from './Header';
import OrderForm from './OrderForm';
import Projects from './Projects';
import ProjectsForSale from './ProjectsForSale';
import { useTranslation } from 'react-i18next';

const PulseLine = () => {
  const { t } = useTranslation();
  const [activeButton, setActiveButton] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [gridOpacity, setGridOpacity] = useState(0.03);

  const socialLinks = {
    telegram: 'https://t.me/lenswinnes',
    github: 'https://github.com/66n1ghtuper',
  };

  const menuItems = React.useMemo(() => [
    t('home'),
    t('my_projects'),
    t('order_website'),
    t('projects_for_sale')
  ], [t]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGridOpacity(prev => {
        const newOpacity = prev + (Math.random() * 0.02 - 0.01);
        return Math.min(Math.max(newOpacity, 0.02), 0.08);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = (index) => {
    setActiveButton(index);
    setIsMobileMenuOpen(false);
  };

  const openSocialLink = (platform) => {
    window.open(socialLinks[platform], '_blank');
  };

  const renderContent = () => {
    switch(activeButton) {
      case 0: 
        return (
          <div className="welcome-text">
            <h1 className="title">{t('welcome_title')}</h1>
            <div className="text-container">
              <p className="animated-text">
                <span className="highlight">{t('frontend_developer')}</span>, {t('creating_interactive_websites')}
              </p>
              <p className="animated-text delay-1">
                {t('for_collaboration_contact')}
              </p>
              <p className="animated-text delay-2">
                {t('open_for_new_ideas')}<br /><span className="blink">{t('thank_you_for_visiting')}</span>
              </p>
            </div>
          </div>
        );
      case 1: 
        return <Projects />;
      case 2: 
        return <OrderForm />;
      case 3: 
        return <ProjectsForSale />;
      default:
        return null;
    }
  };

  return (
    <div className="PulseLine-container" style={{ '--grid-opacity': gridOpacity }}>
      <Header toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
      
      {isMobileMenuOpen && (
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-icons">
            <img 
              src={require('./q1.png')} 
              alt="Telegram" 
              className="icon" 
              onClick={() => openSocialLink('telegram')}
              title={t('write_to_telegram')}
            />
            <img 
              src={require('./q2.png')} 
              alt="GitHub" 
              className="icon" 
              onClick={() => openSocialLink('github')}
              title={t('my_github')}
            />
          </div>
          <MenuSidebar 
            menuItems={menuItems} 
            activeButton={activeButton} 
            setActiveButton={handleMenuItemClick} 
            isMobile={true}
          />
        </div>
      )}
      
      <div className="content-area">
        {renderContent()}
      </div>
      
      {!isMobileMenuOpen && (
        <MenuSidebar 
          menuItems={menuItems} 
          activeButton={activeButton} 
          setActiveButton={handleMenuItemClick} 
          isMobile={false}
        />
      )}
    </div>
  );
};

export default PulseLine;

