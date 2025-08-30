import React from 'react';
import styles from './AboutSection.module.css';
import brandBackground from '../../assets/brand-background.jpg';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection} id="sobre">
      <img src={brandBackground} alt="Ambiente de trabalho" className={styles.backgroundImage} />
      <div className={styles.content}>
        <h2 className={styles.title}>Sobre Mim</h2>
        <p className={styles.bio}>
          Olá, sou Sofia Lima. Com mais de 10 anos de experiência em Recursos Humanos e desenvolvimento de talentos, 
          minha paixão é ajudar profissionais a encontrarem clareza e propósito em suas carreiras. Acredito que 
          com a estratégia certa, todos podem alcançar o sucesso e a satisfação profissional que merecem. 
          Minha abordagem é personalizada, focada em seus pontos fortes e objetivos, para criar um plano de 
          ação que realmente funcione para você.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;