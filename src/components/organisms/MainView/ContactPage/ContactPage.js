import react from 'react';
import styled from 'styled-components';
import styles from './ContactPage.module.css';
import FormField from 'components/atoms/FormField/FormField.js';
import ContactForm from 'components/molecules/ContactForm/ContactForm';

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 350px;
  min-height: 800px;
  height: auto;
  background-color: #0e3854;
  overflow: hidden;
`;

const ContactPage = () => {
  return (
    <Wrapper id="ContactPage">
      <div className={styles.flexContainer}>
        <div className={styles.contactContainer}>
          <h1>Kontakt</h1>
          <p>Patryk Okołowski - nr albumu: 23789</p>
          <p>Albert Wilczyński - nr albumu 24327</p>
          <p>Bartosz Walerowicz - nr albumu 23781</p>
        </div>
        <div className={styles.formContainer}>
          <h1>Napisz do nas</h1>
          <ContactForm />
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactPage;
