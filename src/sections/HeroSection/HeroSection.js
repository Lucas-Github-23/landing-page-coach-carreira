import React from 'react';
import styles from './HeroSection.module.css';
import coachPhoto from '../../assets/coach-photo.jpg';

const HeroSection = () => {
    const scrollToForm = () => {
        document.getElementById('lead-form').scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>Desbloqueie seu Potencial de Carreira</h1>
        <p className={styles.subtitle}>
          Alcance seus objetivos profissionais com um plano de ação claro e estratégico.
        </p>
        <button className={styles.ctaButton} onClick={scrollToForm}>
          RECEBER GUIA GRATUITO
        </button>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
            <img src={coachPhoto} alt="Coach de Carreira Sofia Lima" className={styles.heroImage} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;