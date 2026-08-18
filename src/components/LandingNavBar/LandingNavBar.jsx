import React, { useState, useEffect, useRef } from 'react';
import './LandingNavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@icons/icons'
import LogoFull from '../Logo/LogoFull';
import MainButton from '../Buttons/MainButton/MainButton'
import { useTheme } from '@hooks/useTheme.js';
import { faMoon, faSun, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function LandingNavBar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="LandingNavBar_container" ref={menuRef}>
      <div className="titleBar">
        <Link to="/LandingPage">
          <LogoFull/>
        </Link>
        <div className="titleBar-RightSection">
            <nav className="titleBar-RightSection_linkWrapper">
              <Link className='LandingPageNavBar-links' to="/OProjekcie">O projekcie</Link>
              <Link className='LandingPageNavBar-links' to="/ListaZmian">Lista zmian</Link>
              <Link className='LandingPageNavBar-links' to="/NaszZespol">Nasz zespół</Link>
            </nav>
          <MainButton 
            type="github" 
            iconLeft={Icons.faGithub} 
            iconSize="2xl" 
            text="GitHub" 
            className="github"
            onClick={() => window.open("https://github.com/SmartCampusOrg", "_blank", "noopener,noreferrer")}
          />
          <MainButton 
            className="toogleTheme" 
            type="toogleTheme" 
            iconLeft={isDark ? faSun : faMoon} 
            iconSize="xl"
            onClick={toggleTheme}
          />
          <button 
            className="titleBar_mobileMenuToggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faChevronUp : faChevronDown} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="titleBar_mobileMenu">
          <Link to="/OProjekcie" className="titleBar_mobileMenu_link" onClick={() => setIsMobileMenuOpen(false)}>O projekcie</Link>
          <Link to="/ListaZmian" className="titleBar_mobileMenu_link" onClick={() => setIsMobileMenuOpen(false)}>Lista zmian</Link>
          <Link to="/NaszZespol" className="titleBar_mobileMenu_link" onClick={() => setIsMobileMenuOpen(false)}>Nasz zespół</Link>
          <MainButton 
            type="github" 
            iconLeft={Icons.faGithub} 
            iconSize="2xl" 
            text="GitHub" 
            className="titleBar_mobileMenu_github"
            onClick={() => {
              window.open("https://github.com/SmartCampusOrg", "_blank", "noopener,noreferrer");
              setIsMobileMenuOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
export default LandingNavBar;