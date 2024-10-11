
import React from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">LOGO</h1>
        <div className="icon-container">
          <i className="fas fa-search icon" title="Search"></i>
          <i className="fas fa-heart icon" title="Wishlist"></i>
          <i className="fas fa-shopping-bag icon" title="Shopping Bag"></i>
          <i className="fas fa-user icon" title="Profile"></i>
          
          <div className="dropdown">
            
            <select className="language-selector">
              <option value="en">ENG</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
        </div>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#shop">Shop</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#stories">Stories</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
