import react from 'react';
import styled from 'styled-components';
import styles from './ContactPage.module.css';
import FormField from 'components/atoms/FormField/FormField.js';
import ContactForm from 'components/molecules/ContactForm/ContactForm';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 700px;
  background-color: #0e3854;
  overflow: hidden;
  // max-width: 100%;
`;

const ContactPage = () => {
  return (
    <Wrapper id="ContactPage">
      <div className={styles.flexContainer}>
        <div className={styles.contactContainer}>
          <h1>Kontakt</h1>
          <p>Patryk Okołowski - nr albumu: 23789</p>
          <p>Albert Wilczyński - nr albumu XXXXX</p>
          <p>Bartosz Walerowicz - nr albumu XXXXX</p>
        </div>
        <div className={styles.formContainer}>
          <h1>Napisz do nas</h1>
          <ContactForm />
          <textarea className={styles.textAreaStyle} />
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactPage;
