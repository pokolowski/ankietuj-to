import react from 'react';
import styled from 'styled-components';
import styles from './ContactPage.module.css';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 500px;
  background-color: #0e3854;
`;

const ContactPage = () => {
  return (
    <Wrapper>
      <div className={styles.flexContainer}>
        <div className={styles.contactContainer}>
          <h1>Kontakt</h1>
          <p>Patryk Okołowski - nr albumu: 23789</p>
          <p>Albert Wilczyński - nr albumu XXXXX</p>
          <p>Bartosz Walerowicz - nr albumu XXXXX</p>
        </div>
        <div className={styles.formContainer}>
          <h1>Napisz do nas</h1>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactPage;
