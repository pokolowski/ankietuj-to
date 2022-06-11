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
`;
const Title = styled.h1`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
`;
const StyledInput = styled.div`
  // width: 100%;
  // position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
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
`;
const Span = styled.span`
  width: 80px;
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
    console.log('idzie zmiana');
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
          Email:{' '}
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
          <>
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
          </>
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
        <StyledButtonSave
          onClick={() => {
            if (formValue.newPassword === formValue.repeatPassword) {
              setFormValue({
                ...formValue,
                password: formValue.newPassword,
              });
              setActiveButton(true);
              setActiveForm(false);
            } else {
              props.setErrorPassword(true);
            }
          }}
        >
          Zapisz
        </StyledButtonSave>
      )}
    </Wrapper>
  );
};

export default LoginData;
