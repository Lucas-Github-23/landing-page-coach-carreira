import React from 'react';
import styles from './SideMenu.module.css';
import { FaTimes } from 'react-icons/fa';

const SideMenu = ({ isOpen, onClose, onLinkClick }) => {
  return (
    <>
      <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={onClose}></div>
      <div className={`${styles.sideMenu} ${isOpen ? styles.open : ''}`}>
        <FaTimes className={styles.closeIcon} onClick={onClose} />
        <ul className={styles.menuLinks}>
          <li><a onClick={() => onLinkClick('servicos')}>Serviços</a></li>
          <li><a onClick={() => onLinkClick('sobre')}>Sobre Mim</a></li>
          <li><a onClick={() => onLinkClick('lead-form')}>Guia Gratuito</a></li>
          <li><a onClick={() => onLinkClick('contato')}>Contato</a></li>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;