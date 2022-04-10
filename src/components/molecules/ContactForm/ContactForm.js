import react, { useState } from 'react';
import FormField from 'components/atoms/FormField/FormField.js';
import styles from './ContactForm.module.css';
import Button from 'components/atoms/Button/button';
// import { useState } from 'react/cjs/react.production.min';

const ContactForm = () => {
  const [formsValues, setFormsValues] = useState({
    email: '',
    subject: '',
  });

  const handleValueChange = (e) => {
    // console.log(formsValues);
    // console.log(e.target.label);
    setFormsValues({
      ...formsValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <FormField
        label="Twój adres email"
        name="email"
        id="email"
        onChange={handleValueChange}
      />
      <br />
      <FormField
        label="Temat"
        name="subject"
        id="subject"
        marginBottom="50px"
        onChange={handleValueChange}
      />
      <br />
      <label>Napisz wiadomość do nas:</label>
      <br />
      <br />
      <textarea className={styles.textAreaStyle} />
      <br />
      <Button text="Wyślij"></Button>
    </>
  );
};

export default ContactForm;
