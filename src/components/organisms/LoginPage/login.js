import react, { useState } from 'react';
import styled from 'styled-components';
import styles from './login.module.css';
import LoginForm from 'components/molecules/LoginForm/loginForm';
import Button from 'components/atoms/Button/button';
import RegistryForm from 'components/molecules/RegistryForm/registry';

const Wrapper = styled.div`
  width: 400px;
  //   height: ${(props) => (props.displayOff ? '700px' : '500px')};
  position: absolute;
  top: 50%;
  left: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transform: translate(-50%, -50%);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  //   background-color: red;
  overflow: hidden;
  transition: 0.5s;
`;
const P = styled.p`
  align-self: center;
`;

const Login = () => {
  const [displayOff, setDisplayOff] = useState(false);

  const ChangeForm = () => {};

  return (
    <Wrapper>
      <h1 className={styles.styledH1}> ankietuj to </h1>
      <LoginForm display={displayOff ? 'none' : ''} />
      <RegistryForm display={displayOff ? 'none' : ''} />
      <Button
        text={displayOff ? 'Zarejestruj się' : 'Zaloguj się'}
        alignSelf="center"
        className={styles.styledBtn}
      />
      <P>
        {displayOff ? 'Posiadasz już konto? ' : 'Nie posiadasz jeszcze konta? '}
        <a
          href="#"
          onClick={() => {
            setDisplayOff(!displayOff);
            console.log(displayOff);
          }}
        >
          {displayOff ? 'Zaloguj się.' : 'Załóż już teraz!'}
        </a>
      </P>
    </Wrapper>
  );
};

export default Login;
