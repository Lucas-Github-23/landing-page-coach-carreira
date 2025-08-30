import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import SideMenu from '../SideMenu/SideMenu';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo} onClick={() => scrollToSection('hero')}>
          Sofia Lima
        </div>
        <ul className={styles.navLinks}>
          <li><a onClick={() => scrollToSection('servicos')}>Serviços</a></li>
          <li><a onClick={() => scrollToSection('sobre')}>Sobre Mim</a></li>
          <li><a onClick={() => scrollToSection('contato')}>Contato</a></li>
        </ul>
        <div className={styles.navRight}>
          <ThemeToggle />
          <FaBars className={styles.menuIcon} onClick={() => setIsMenuOpen(true)} />
        </div>
      </nav>
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onLinkClick={scrollToSection} />
    </>
  );
};

export default Navbar;