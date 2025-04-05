import React from 'react';
import './Header.css';

const MenuSidebar = ({ menuItems, activeButton, setActiveButton, isMobile }) => {

  const displayedItems = menuItems.slice(0, 4);
  

  while (displayedItems.length < 4) {
    displayedItems.push('Скоро');
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
          {item}
        </button>
      ))}
    </div>
  );
};

export default MenuSidebar;
