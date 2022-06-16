import React, { useState } from 'react';
import styled from 'styled-components';
import styles from './userData.module.css';
import FormField from 'components/atoms/FormField/FormField';
import { useAuth } from 'hooks/useAuth';

const Wrapper = styled.div`
  width: 90%;
  min-height: 50%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  // background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    height: 55%;
    bottom: 70px;
    // background-color: red;
    // justify-content: flex-start;
  }
`;
const Title = styled.h1`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  @media (max-width: 900px) {
    top: -50px;
  }
  @media (max-width: 400px) {
    top: -70px;
  }
`;
const StyledInput = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-around;
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
  @media (max-width: 900px) {
    bottom: 0;
    transform: translate(-50%, 100%);
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
`;

const UserData = ({ ...props }) => {
  const [activeForm, setActiveForm] = useState(false);
  const [activeButton, setActiveButton] = useState(true);
  const auth = useAuth();
  const [formValue, setFormValue] = useState({
    name: auth.user.imie,
    surname: auth.user.nazwisko,
    college: '',
  });
  const formHandler = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const SaveData = () => {
    // zapis do bazy danych nowych danych
  };
  return (
    <Wrapper {...props}>
      <Title>Twoje dane</Title>
      <StyledInput>
        Imię:{' '}
        {activeForm ? (
          <input
            name="name"
            type="text"
            value={formValue.name}
            className={styles.inputClass}
            onChange={formHandler}
          />
        ) : (
          <input
            type="text"
            defaultValue={formValue.name}
            className={styles.inputClass}
            disabled
          />
        )}
      </StyledInput>
      <StyledInput>
        Nazwisko:{' '}
        {activeForm ? (
          <input
            name="surname"
            type="text"
            value={formValue.surname}
            onChange={formHandler}
            className={styles.inputClass}
          />
        ) : (
          <input
            type="text"
            value={formValue.surname}
            className={styles.inputClass}
            disabled
          />
        )}
      </StyledInput>
      <StyledInput>
        Uczelnia:{' '}
        {activeForm ? (
          <input
            name="college"
            type="text"
            value={formValue.college}
            onChange={formHandler}
            className={styles.inputClass}
          />
        ) : (
          <input
            type="text"
            value={formValue.college}
            className={styles.inputClass}
            disabled
          />
        )}
      </StyledInput>
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
              if (formValue.imie != '' && formValue.surname != '') {
                setActiveButton(true);
                setActiveForm(false);
              }
            }}
          >
            Zapisz
          </StyledButton>
          <StyledButton
            className={styles.cancelBtn}
            onClick={() => {
              setFormValue({
                name: auth.user.imie,
                surname: auth.user.nazwisko,
                college: '',
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

export default UserData;
