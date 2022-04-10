import react, { useState } from 'react';
import styled from 'styled-components';
// import styles from './loginForm.module.css';
import FormField from 'components/atoms/FormField/FormField';
import Button from 'components/atoms/Button/button';

const Wrapper = styled.div`
  color: black;
  position: relative;
  display: ${(props) => (props.display ? 'block' : 'none')};
  transition: 0.5s;
  left: ${(props) => (props.display ? '30px' : '100%')};
`;
const P = styled.p`
  margin-bottom: 10px;
`;

const RegistryForm = ({ display }) => {
  const [formsValues, setFormsValues] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    password: '',
    repeatpassword: '',
  });

  const handleValueChange = (e) => {
    setFormsValues({
      ...formsValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Wrapper display={display}>
      <FormField label="Imie" name="FirstName" marginBottom="30"></FormField>
      <br />
      <FormField label="Nazwisko" name="LastName" marginBottom="30"></FormField>
      <br />
      <FormField label="Adres Email" name="email" marginBottom="30"></FormField>
      <br />
      <FormField
        label="Hasło"
        name="password"
        type="password"
        marginBottom="30"
      ></FormField>
      <br />
      <FormField
        label="Powtórz hasło"
        name="repeatpassword"
        type="password"
        marginBottom="30"
      ></FormField>
    </Wrapper>
  );
};

export default RegistryForm;
