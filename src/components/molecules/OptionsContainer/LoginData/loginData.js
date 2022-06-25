import React, { useState } from 'react';
import styled from 'styled-components';
import styles from './userLogin.module.css';
import { useAuth } from 'hooks/useAuth';

const Wrapper = styled.div`
  width: 90%;
  height: 50%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  // background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  @media (max-width: 1000px) {
    bottom: 40px;
    flex-direction: column;
    // overflow: hidden;
    justify-content: flex-start;
  }
  @media (min-width: 900px) and (max-width: 1000px) {
    bottom: 60px;
    // display: none;
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
  // width: 100%;
  // position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  @media (max-width: 1000px) {
    width: 100%;
    position: relative;
    justify-content: space-around;
    flex-wrap: wrap;
    // background-color: white;
    margin-top: 10px;
    // border: 2px solid red;
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
  // overflow: hidden;
  position: relative;
  // top: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // background-color: red;
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
    password: auth.user.haslo,
    newPassword: '',
    repeatPassword: '',
  });
  const formHandler = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
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
              {/* Powtórz hasło:{' '}
              <input
                name="repeatPassword"
                type="password"
                value={formValue.repeatPassword}
                className={styles.inputClass}
                onChange={formHandler}
              /> */}
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
            Password:{' '}
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
          <StyledButton
            className={styles.saveBtn}
            onClick={() => {
              if (
                formValue.imie != '' &&
                formValue.surname != '' &&
                formValue.newPassword === formValue.repeatPassword &&
                formValue.newPassword != ''
              ) {
                setActiveButton(true);
                setActiveForm(false);
              } else {
                props.setErrorPassword(true);
              }
            }}
          >
            Zapisz
          </StyledButton>
          <StyledButton
            className={styles.cancelBtn}
            onClick={() => {
              setFormValue({
                email: auth.user.email,
                password: auth.user.haslo,
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
