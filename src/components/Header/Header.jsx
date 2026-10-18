import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.wordmark}>
          <span className={styles.graffitiWordmark}>GRIZZLY</span>
        </div>
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
        >
          <span className={styles.hamburger} aria-hidden="true"></span>
        </button>
        <nav
          id="main-navigation"
          className={`${styles.navigation} ${isMenuOpen ? styles.open : ''}`}
          aria-label="Main navigation"
        >
          <ul className={styles.navList}>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
