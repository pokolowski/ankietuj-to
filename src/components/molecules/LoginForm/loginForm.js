import react, { useState } from 'react';
import styled from 'styled-components';
import styles from './loginForm.module.css';
import FormField from 'components/atoms/FormField/FormField';
import Button from 'components/atoms/Button/button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { useLocation } from 'react-router-dom';
import LoadingGif from 'assets/gifs/loading.gif';

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
const Error = styled.p`
  margin-bottom: 10px;
  color: red;
  font-family: 'Alata';
`;
const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  // background-color: red;
  justify-content: center;
`;
const LoadingContainer = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: red;
`;

const LoginForm = ({ display, handleSignIn, ...props }) => {
  const [formsValues, setFormsValues] = useState({
    login: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const auth = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    handleSubmit(auth.signIn);
  };
  return (
    <Wrapper display={display} as="form" onSubmit={handleSubmit(auth.signIn)}>
      {isLoading ? (
        <LoadingContainer src={LoadingGif}></LoadingContainer>
      ) : (
        <>
          <FormField
            label="Login"
            name="login"
            fontColor="red"
            marginBottom="30"
            {...register('email', {
              pattern:
                /^([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+.?[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-])+@{1}[a-zA-Z]+.{1}[a-zA-Z]+(.{1}[a-zA-Z]+)?$/i,
            })}
          ></FormField>
          <br />
          <FormField
            label="Hasło"
            name="password"
            type="password"
            fontColor="red"
            marginBottom="5px"
            {...register('password', {
              reguired: 'Hasło jest wymagane',
              minLength: {
                value: 8,
                message: 'Hasło musi posiadać minimum 8 znaków',
              },
              validate: (value) =>
                value.match(/[a-z]/g) &&
                value.match(/[A-Z]/g) &&
                value.match(/[0-9]/g) &&
                value.match(/[!@#$%^&*()]/g),
            })}
          ></FormField>
          <P>Zapomniałeś hasła?</P>
          {errors.email && <Error>Zły format adresu email</Error>}
          {errors.password && <Error>{errors.password.message} </Error>}
        </>
      )}

      {/* {location && <Error>{location.state.name}</Error>} */}

      <BtnContainer>
        <Button text="Zaloguj się" alignSelf="center" fontSize="15" />
      </BtnContainer>
    </Wrapper>
  );
};

export default LoginForm;
