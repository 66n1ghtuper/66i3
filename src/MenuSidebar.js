import React from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next';

const MenuSidebar = ({ menuItems, activeButton, setActiveButton, isMobile }) => {
  const { t } = useTranslation();

  const displayedItems = menuItems.slice(0, 4);
  
  while (displayedItems.length < 4) {
    displayedItems.push(t('coming_soon'));
  }

  return (
    <div className={`${isMobile ? 'mobile-menu-sidebar' : 'menu-sidebar'}`}>
      {displayedItems.map((item, index) => (
        <button
          key={index}
          className={`menu-button ${activeButton === index ? 'active' : ''}`}
          onClick={() => setActiveButton(index)}
          disabled={index >= menuItems.length} 
        >
          {activeButton === index && <span className="selector"></span>}
          {t(item)} 
        </button>
      ))}
    </div>
  );
};

export default MenuSidebar;
