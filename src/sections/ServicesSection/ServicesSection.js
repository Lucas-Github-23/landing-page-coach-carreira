import React from 'react';
import styles from './ServicesSection.module.css';
import { FaFileAlt, FaComments, FaLightbulb } from 'react-icons/fa';

const services = [
  {
    icon: <FaFileAlt />,
    title: "Análise de Currículo",
    description: "Otimize seu currículo e LinkedIn para se destacar aos olhos dos recrutadores e passar pelos filtros de ATS."
  },
  {
    icon: <FaComments />,
    title: "Preparação para Entrevistas",
    description: "Ganhe confiança e aprenda a responder às perguntas mais difíceis, demonstrando seu valor de forma clara e eficaz."
  },
  {
    icon: <FaLightbulb />,
    title: "Plano de Carreira",
    description: "Desenvolva um plano estratégico para o seu futuro profissional, identificando oportunidades e definindo metas alcançáveis."
  }
];

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection} id="servicos">
      <h2 className={styles.title}>Como posso te ajudar?</h2>
      <div className={styles.cardsContainer}>
        {services.map((service, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;