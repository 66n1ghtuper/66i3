import React, { useState, useEffect } from 'react';
import './PulseLine.css';
import MenuSidebar from './MenuSidebar';
import Header from './Header';
import OrderForm from './OrderForm';
import Projects from './Projects';
import ProjectsForSale from './ProjectsForSale';

const PulseLine = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [gridOpacity, setGridOpacity] = useState(0.03);

  // Добавляем ссылки на соцсети
  const socialLinks = {
    telegram: 'https://t.me/lenswinnes',
    github: 'https://github.com/66n1ghtuper',
  };

  const menuItems = React.useMemo(() => [
    'Главная',
    'Мои проекты',
    'Заказать сайт',
    'Проекты на продажу'
  ], []);

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

  // Функция для открытия соцсети
  const openSocialLink = (platform) => {
    window.open(socialLinks[platform], '_blank');
  };

  const renderContent = () => {
    switch(activeButton) {
      case 0: 
        return (
          <div className="welcome-text">
            <h1 className="title">Добро пожаловать на мой сайт-портфолио!</h1>
            <div className="text-container">
              <p className="animated-text">
                <span className="highlight">Я фронтенд разработчик</span>, создающий интерактивные и функциональные веб-сайты. 
                Если вы хотите заказать сайт или проект, я буду рад сотрудничеству и сделаю в срок!
              </p>
              <p className="animated-text delay-1">
                Для постоянного сотрудничества или оффера свяжитесь со мной — нажмите на кнопку самолетика 
                в правом верхнем углу, чтобы перейти в Telegram.
              </p>
              <p className="animated-text delay-2">
                Я открыт для новых идей и совместных проектов.<br></br> <span className="blink">Спасибо за посещение моего сайта!</span>
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
            {/* Добавляем обработчики клика для иконок */}
            <img 
              src={require('./q1.png')} 
              alt="Telegram" 
              className="icon" 
              onClick={() => openSocialLink('telegram')}
              title="Написать в Telegram"
            />
            <img 
              src={require('./q2.png')} 
              alt="GitHub" 
              className="icon" 
              onClick={() => openSocialLink('github')}
              title="Мой GitHub"
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