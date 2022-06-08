import React, { useState } from 'react';
import styled from 'styled-components';
import styles from './userData.module.css';
import FormField from 'components/atoms/FormField/FormField';

const Wrapper = styled.div`
  width: 90%;
  height: 60%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  // background-color: white;
  display: flex;
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
  const [formValue, setFormValue] = useState({
    name: 'Patryk',
    surname: 'Okołowski',
    college: '',
  });
  const formHandler = (e) => {
    console.log('idzie zmiana');
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
        <StyledButtonSave
          onClick={() => {
            setActiveButton(true);
            setActiveForm(false);
          }}
        >
          Zapisz
        </StyledButtonSave>
      )}
    </Wrapper>
  );
};

export default UserData;
