import react, { useState } from 'react';
import styled from 'styled-components';
// import styles from './loginForm.module.css';
import FormField from 'components/atoms/FormField/FormField';
import Button from 'components/atoms/Button/button';

const Wrapper = styled.div`
  color: black;
  width: 100%;
  // background-color: red;
  position: relative;
  display: ${(props) => (props.display ? 'block' : 'none')};
  transition: 0.5s;
  left: ${(props) => (props.display ? '30px' : '100%')};
`;
const P = styled.p`
  margin-bottom: 10px;
`;
const BtnContainer = styled.div`
  width: 100%;
  position: relative;
  left: -30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper display={display} as="form" onSubmit={handleSubmit}>
      <FormField
        label="Imie"
        name="FirstName"
        marginBottom="30"
        value={formsValues.FirstName}
        onChange={handleValueChange}
      ></FormField>
      <br />
      <FormField
        label="Nazwisko"
        name="LastName"
        marginBottom="30"
        value={formsValues.LastName}
        onChange={handleValueChange}
      ></FormField>
      <br />
      <FormField
        label="Adres Email"
        name="email"
        marginBottom="30"
        value={formsValues.email}
        onChange={handleValueChange}
      ></FormField>
      <br />
      <FormField
        label="Hasło"
        name="password"
        type="password"
        marginBottom="30"
        value={formsValues.password}
        onChange={handleValueChange}
      ></FormField>
      <br />
      <FormField
        label="Powtórz hasło"
        name="repeatpassword"
        type="password"
        marginBottom="30"
        value={formsValues.repeatpassword}
        onChange={handleValueChange}
      ></FormField>
      <BtnContainer>
        <Button text="Zarejestruj się" alignSelf="center" fontSize="15" />
      </BtnContainer>
    </Wrapper>
  );
};

export default RegistryForm;
