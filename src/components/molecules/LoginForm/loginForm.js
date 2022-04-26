import react, { useState } from 'react';
import styled from 'styled-components';
import styles from './loginForm.module.css';
import FormField from 'components/atoms/FormField/FormField';
import Button from 'components/atoms/Button/button';

const Wrapper = styled.div`
  color: black;
  width: 100%;
  position: relative;
  display: ${(props) => (props.display ? 'none' : 'block')};
  left: ${(props) => (props.display ? '-100%' : '0')};
  transition: 0.5s;
`;
const P = styled.p`
  margin-bottom: 50px;
`;
const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  // background-color: red;
  justify-content: center;
`;

const LoginForm = ({ display }) => {
  const [formsValues, setFormsValues] = useState({
    login: '',
    password: '',
  });

  const handleValueChange = (e) => {
    setFormsValues({
      ...formsValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('udalo sie logowanie');
    setFormsValues({
      login: '',
      password: '',
    });
  };
  return (
    <Wrapper display={display} as="form" onSubmit={handleSubmit}>
      <FormField
        label="Login"
        name="login"
        fontColor="red"
        marginBottom="30"
        onChange={handleValueChange}
        value={formsValues.login}
      ></FormField>
      <br />
      <FormField
        label="Hasło"
        name="password"
        type="password"
        fontColor="red"
        marginBottom="5px"
        onChange={handleValueChange}
        value={formsValues.password}
      ></FormField>
      <P>Zapomniałeś hasła?</P>
      <BtnContainer>
        <Button text="Zaloguj się" alignSelf="center" fontSize="15" />
      </BtnContainer>
    </Wrapper>
  );
};

export default LoginForm;
