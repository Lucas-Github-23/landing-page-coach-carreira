import React, { useState } from 'react';
import styles from './LeadFormSection.module.css';
import ebookCover from '../../assets/ebook-cover.png';

const LeadFormSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // ****** ATENÇÃO: SUBSTITUA OS VALORES ABAIXO ******
    const formActionUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdgwPGhRADttiHK1w0zchTaTUBWEofzccWm5NEkQckRgUBTkw/formResponse';
    const nameEntryId = 'entry.1367615645'; // Substitua pelo ID do campo "Nome"
    const emailEntryId = 'entry.1944062676'; // Substitua pelo ID do campo "E-mail"
    // *************************************************

    const formData = new FormData();
    formData.append(nameEntryId, name);
    formData.append(emailEntryId, email);

    try {
      // Enviando os dados para um iframe oculto para evitar problemas de CORS e redirecionamento
      const hiddenIframe = document.createElement('iframe');
      hiddenIframe.name = 'hiddenIframe';
      hiddenIframe.style.display = 'none';
      document.body.appendChild(hiddenIframe);

      // O formulário temporário submete os dados para o iframe
      const tempForm = document.createElement('form');
      tempForm.target = 'hiddenIframe';
      tempForm.action = formActionUrl;
      tempForm.method = 'POST';
      
      const nameInput = document.createElement('input');
      nameInput.type = 'hidden';
      nameInput.name = nameEntryId;
      nameInput.value = name;
      tempForm.appendChild(nameInput);
      
      const emailInput = document.createElement('input');
      emailInput.type = 'hidden';
      emailInput.name = emailEntryId;
      emailInput.value = email;
      tempForm.appendChild(emailInput);
      
      document.body.appendChild(tempForm);
      tempForm.submit();

      setSubmitted(true);
      setError('');

      // Limpa os elementos temporários após um tempo
      setTimeout(() => {
        document.body.removeChild(hiddenIframe);
        document.body.removeChild(tempForm);
      }, 500);

    } catch (e) {
      setError('Ocorreu um erro ao enviar o formulário. Tente novamente.');
    }
  };

  return (
    <section className={styles.leadFormSection} id="lead-form">
      <div className={styles.ebookContainer}>
        <img src={ebookCover} alt="Capa do E-book Guia Definitivo para sua Próxima Entrevista" className={styles.ebookCover} />
      </div>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Receba o Guia Definitivo para sua Próxima Entrevista</h2>
        
        {submitted ? (
          <div className={styles.successMessage}>
            <h3>Obrigado!</h3>
            <p>Seu guia foi enviado para o seu e-mail. Verifique sua caixa de entrada (e a pasta de spam).</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Seu Nome" 
              className={styles.input} 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Seu Melhor E-mail" 
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" className={styles.submitButton}>BAIXAR AGORA</button>
            {error && <p className={styles.errorMessage}>{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
};

export default LeadFormSection;