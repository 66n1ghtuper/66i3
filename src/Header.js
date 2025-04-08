import React, { useState, useEffect } from 'react';
import './Header.css';
import Icon1 from './q1.png'; 
import Icon2 from './q2.png'; 
import BurgerIcon from './56.png';
import { useTranslation } from 'react-i18next';

const Header = ({ toggleMobileMenu, isMobileMenuOpen }) => {
  const [logoText, setLogoText] = useState('');
  const fullLogo = '66nightuper';
  const [showUnderscore, setShowUnderscore] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullLogo.length) {
        setLogoText(fullLogo.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setInterval(() => {
          setShowUnderscore(prev => !prev);
        }, 500);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  const openSocial = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <span className="logo">{logoText}</span>
        {showUnderscore && <span className="logo-underscore">_</span>}
      </div>
      
      <div className="header-right-container">
        <div className="desktop-icons">
          <button 
            className="language-switcher desktop"
            onClick={changeLanguage}
            title={i18n.language === 'en' ? 'Switch to Russian' : 'Switch to English'}
          >
            {i18n.language.toUpperCase()}
          </button>
          
          <img 
            src={Icon1} 
            alt="Telegram" 
            className="icon" 
            onClick={() => openSocial('https://t.me/lenswinnes')}
          />
          
          <img 
            src={Icon2} 
            alt="GitHub" 
            className="icon" 
            onClick={() => openSocial('https://github.com/66n1ghtuper')}
          />
        </div>
        
        <div className="mobile-controls">
          <button 
            className="language-switcher mobile"
            onClick={changeLanguage}
            title={i18n.language === 'en' ? 'Switch to Russian' : 'Switch to English'}
          >
            {i18n.language.toUpperCase()}
          </button>
          
          <button className="burger-menu" onClick={toggleMobileMenu}>
            <img 
              src={BurgerIcon} 
              alt="Menu" 
              className={`burger-icon ${isMobileMenuOpen ? 'open' : ''}`} 
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;