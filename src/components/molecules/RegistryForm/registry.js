import react, { useState, useRef } from 'react';
import styled from 'styled-components';
// import styles from './loginForm.module.css';
import FormField from 'components/atoms/FormField/FormField';
import Button from 'components/atoms/Button/button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';

const Wrapper = styled.div`
  color: black;
  width: 100%;
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
const Radio = styled.div`
  margin-bottom: 10px;
`;
const Error = styled.p`
  margin-bottom: 30px;
  margin-top: 0;
  color: red;
  font-family: 'Alata';
`;

const RegistryForm = ({ display }) => {
  const [formsValues, setFormsValues] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    password: '',
    repeatpassword: '',
  });
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleValueChange = (e) => {
    setFormsValues({
      ...formsValues,
      [e.target.name]: e.target.value,
    });
  };
  const password = useRef({});
  password.current = watch('password', '');

  return (
    <Wrapper display={display} as="form" onSubmit={handleSubmit(auth.register)}>
      <FormField
        label="Imie"
        name="name"
        marginBottom="30"
        {...register('name')}
      ></FormField>
      <br />
      <FormField
        label="Nazwisko"
        name="surname"
        marginBottom="30"
        {...register('surname')}
      ></FormField>
      <br />
      <Radio>
        <input
          type="radio"
          name="sex"
          value="male"
          id="male"
          {...register('sex')}
        />
        <label htmlFor="male"> Mężczyzna </label>
        <input
          type="radio"
          name="sex"
          value="female"
          id="female"
          {...register('sex')}
        />
        <label htmlFor="female"> Kobieta </label>
        <input
          type="radio"
          name="sex"
          value="other"
          id="other"
          {...register('sex')}
        />
        <label htmlFor="other"> Inna </label>
      </Radio>
      <br />
      <FormField
        label="Adres Email"
        name="email"
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
        marginBottom="30"
        {...register('password', {
          minLength: {
            value: 8,
            message: 'Hasło musi posiadać minimum 8 znaków',
          },
        })}
      ></FormField>
      <br />
      <FormField
        label="Powtórz hasło"
        name="repeatpassword"
        type="password"
        marginBottom="30"
        {...register('repeatpassword', {
          validate: (value) =>
            value === password.current || 'Hasła do siebie nie pasują',
        })}
      ></FormField>
      {errors.password && <Error>{errors.password.message}</Error>}
      {errors.repeatpassword && <Error>{errors.repeatpassword.message}</Error>}
      <BtnContainer>
        <Button text="Zarejestruj się" alignSelf="center" fontSize="15" />
      </BtnContainer>
    </Wrapper>
  );
};

export default RegistryForm;
