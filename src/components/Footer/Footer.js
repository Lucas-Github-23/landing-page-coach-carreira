import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer} id="contato">
      <p>&copy; 2025 Sofia Lima. Todos os direitos reservados.</p>
      <div className={styles.socialIcons}>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;