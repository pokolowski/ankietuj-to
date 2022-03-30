import react from 'react';
import FormField from 'components/atoms/FormField/FormField.js';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <>
      <FormField label="Twój adres email" />
      <br />
      <FormField label="Temat" marginBottom="50px" />
    </>
  );
};

export default ContactForm;
