import React, { useState } from 'react';
import styled from 'styled-components';
import styles from './userLogin.module.css';
import { useAuth } from 'hooks/useAuth';
import axios from 'axios';

const Wrapper = styled.div`
  width: 90%;
  height: 50%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  @media (max-width: 1000px) {
    bottom: 40px;
    flex-direction: column;
    justify-content: flex-start;
  }
  @media (min-width: 900px) and (max-width: 1000px) {
    bottom: 60px;
  }
`;
const Title = styled.h1`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;
const StyledInput = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  @media (max-width: 1000px) {
    width: 100%;
    position: relative;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 10px;
  }
`;
const StyledButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
  background-color: transparent;
  border: 2px solid #067eed;
  padding: 10px;
  font-weight: bold;
  color: #067eed;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
  @media (max-width: 1000px) {
    transform: translate(-50%, 80%);
  }
  @media (min-width: 900px) and (max-width: 1000px) {
    transform: translate(-50%, 140%);
  }
`;
const StyledButtonSave = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
  background-color: transparent;
  border: 2px solid #067eed;
  padding: 10px;
  font-weight: bold;
  color: #067eed;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
  @media (max-width: 1000px) {
    transform: translateY(100%);
  }
`;
const FlexChild = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const Span = styled.span`
  width: 80px;
  flex-direction: column;
`;

const LoginData = ({ ...props }) => {
  const [activeForm, setActiveForm] = useState(false);
  const [activeButton, setActiveButton] = useState(true);
  const auth = useAuth();
  const [formValue, setFormValue] = useState({
    email: auth.user.email,
    password: '12345678',
    newPassword: '',
    repeatPassword: '',
  });
  const formHandler = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const saveNewLoginData = async () => {
    if (
      formValue.imie != '' &&
      formValue.surname != '' &&
      formValue.newPassword === formValue.repeatPassword &&
      formValue.newPassword != '' &&
      formValue.newPassword.length >= '8'
    ) {
      setActiveButton(true);
      setActiveForm(false);
      let authToken = localStorage.getItem('token');
      axios.interceptors.request.use(
        (config) => {
          config.headers.authorization = `Bearer ${authToken}`;
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
      try {
        const response = await axios.patch(
          '/api/Account/changePassword',
          `${formValue.newPassword}`,
          { headers: { 'Content-Type': 'application/json' } }
        );
      } catch (e) {}
    } else {
      props.setErrorPassword(true);
    }
  };
  return (
    <Wrapper {...props}>
      <Title>Dane logowania</Title>
      <FlexChild>
        <StyledInput>
          <span>Email: </span>
          {activeForm ? (
            <input
              name="email"
              type="text"
              value={formValue.email}
              className={styles.inputClass}
              onChange={formHandler}
            />
          ) : (
            <input
              type="text"
              defaultValue={formValue.email}
              className={styles.inputClass}
              disabled
            />
          )}
        </StyledInput>
      </FlexChild>
      <FlexChild>
        {activeForm ? (
          <StyledInput>
            <StyledInput>
              <Span>Nowe hasło: </Span>
              <input
                name="newPassword"
                type="password"
                value={formValue.newPassword}
                className={styles.inputClass}
                onChange={formHandler}
              />
            </StyledInput>
            <StyledInput className={styles.repeatPassword}>
              <Span>Potwierdź hasło: </Span>
              <input
                name="repeatPassword"
                type="password"
                value={formValue.repeatPassword}
                className={styles.inputClass}
                onChange={formHandler}
              />
            </StyledInput>
          </StyledInput>
        ) : (
          <StyledInput>
            Hasło:{' '}
            <input
              name="password"
              type="password"
              value={formValue.password}
              className={styles.inputClass}
              onChange={formHandler}
              disabled
            />
          </StyledInput>
        )}
      </FlexChild>

      {activeButton ? (
        <StyledButton
          onClick={() => {
            setActiveButton(false);
            setActiveForm(true);
          }}
        >
          Zmień dane
        </StyledButton>
      ) : (
        <>
          <StyledButton className={styles.saveBtn} onClick={saveNewLoginData}>
            Zapisz
          </StyledButton>
          <StyledButton
            className={styles.cancelBtn}
            onClick={() => {
              setFormValue({
                email: auth.user.email,
                password: '12345678',
                newPassword: '',
                repeatPassword: '',
              });
              setActiveButton(true);
              setActiveForm(false);
            }}
          >
            Anuluj
          </StyledButton>
        </>
      )}
    </Wrapper>
  );
};

export default LoginData;
