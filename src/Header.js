import React, { useState, useEffect } from 'react';
import './Header.css';
import Icon1 from './q1.png'; 
import Icon2 from './q2.png'; 
import BurgerIcon from './56.png';

const Header = ({ toggleMobileMenu, isMobileMenuOpen }) => {
  const [logoText, setLogoText] = useState('');
  const fullLogo = '66nightuper';
  const [showUnderscore, setShowUnderscore] = useState(true);

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

  return (
    <header className="header">
      <div className="logo-container">
        <span className="logo">{logoText}</span>
        {showUnderscore && <span className="logo-underscore">_</span>}
      </div>
      
      <div className="desktop-icons">

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
      
      <button className="burger-menu" onClick={toggleMobileMenu}>
        <img 
          src={BurgerIcon} 
          alt="Меню" 
          className={`burger-icon ${isMobileMenuOpen ? 'open' : ''}`} 
        />
      </button>
    </header>
  );
};

export default Header;