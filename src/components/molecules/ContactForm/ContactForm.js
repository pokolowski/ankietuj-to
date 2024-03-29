import react, { useState } from 'react';
import FormField from 'components/atoms/FormField/FormField.js';
import styles from './ContactForm.module.css';
import Button from 'components/atoms/Button/button';

const ContactForm = () => {
  const initialFormState = {
    email: '',
    subject: '',
    textarea: '',
  };

  const [formsValues, setFormsValues] = useState(initialFormState);

  const handleValueChange = (e) => {
    setFormsValues({
      ...formsValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormsValues(initialFormState);
  };
  return (
    <form className={styles.formStyles} onSubmit={handleSubmit}>
      <FormField
        label="Twój adres email"
        name="email"
        id="email"
        value={formsValues.email}
        onChange={handleValueChange}
      />
      <br />
      <FormField
        label="Temat"
        name="subject"
        id="subject"
        marginBottom="50px"
        value={formsValues.subject}
        onChange={handleValueChange}
      />
      <br />
      <br />
      <label>Napisz wiadomość do nas:</label>
      <br />
      <br />
      <textarea
        className={styles.textAreaStyle}
        name="textarea"
        value={formsValues.textarea}
        onChange={handleValueChange}
      />
      <br />
      <Button text="Wyślij"></Button>
    </form>
  );
};

export default ContactForm;
