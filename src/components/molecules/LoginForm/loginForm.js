import react, { useState } from 'react';
import styled from 'styled-components';
import styles from './loginForm.module.css';
import FormField from 'components/atoms/FormField/FormField';
import Button from 'components/atoms/Button/button';

const Wrapper = styled.div`
  color: black;
  position: relative;
  display: ${(props) => (props.display ? 'none' : 'block')};
  left: ${(props) => (props.display ? '-100%' : '0')};
  transition: 0.5s;
`;
const P = styled.p`
  margin-bottom: 10px;
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
  return (
    <Wrapper display={display}>
      <FormField
        label="Login"
        name="login"
        fontColor="red"
        marginBottom="30"
      ></FormField>
      <br />
      <FormField
        label="Hasło"
        name="password"
        type="password"
        fontColor="red"
        marginBottom="5px"
      ></FormField>
      <p>Zapomniałeś hasła?</p>
    </Wrapper>
  );
};

export default LoginForm;
