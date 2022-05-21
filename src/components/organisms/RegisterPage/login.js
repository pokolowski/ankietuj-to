import react, { useState, useContext } from 'react';
import styled from 'styled-components';
import styles from './register.module.css';
import LoginForm from 'components/molecules/LoginForm/loginForm';
import Button from 'components/atoms/Button/button';
import RegistryForm from 'components/molecules/RegistryForm/registry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { LoginContext } from 'views/Root';

const Wrapper = styled.div`
  width: 400px;
  // height: 500px;
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
const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Login = ({ handleSignIn, LoginOrRegister, setLoginOrRegister }) => {
  // const display = useContext(LoginContext);
  // const [displayOff, setDisplayOff] = useState(false);
  const ChangeForm = () => {};

  const dupa = () => {
    console.log('dupa');
  };

  return (
    <Wrapper>
      <NavLink to="/" className={styles.iconBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </NavLink>
      <h1 className={styles.styledH1}> ankietuj to </h1>
      <LoginForm
        display={LoginOrRegister ? 'none' : ''}
        handleSignIn={handleSignIn}
      />
      <RegistryForm display={LoginOrRegister ? 'none' : ''} />
      <StyledDiv>
        {/* <Button
          text={displayOff ? 'Zarejestruj się' : 'Zaloguj się'}
          alignSelf="center"
          fontSize="15"
          className={styles.styledBtn}
        /> */}
        <P>
          {LoginOrRegister
            ? 'Posiadasz już konto? '
            : 'Nie posiadasz jeszcze konta? '}
          <a
            href="#"
            onClick={() => {
              setLoginOrRegister(!LoginOrRegister);
              console.log('poszlo');
            }}
          >
            {LoginOrRegister ? 'Zaloguj się.' : 'Załóż już teraz!'}
          </a>
        </P>
      </StyledDiv>
    </Wrapper>
  );
};

export default Login;
