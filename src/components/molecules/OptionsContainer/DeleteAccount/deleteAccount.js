import React, { useState } from 'react';
import styled from 'styled-components';
import styles from './deleteAccount.module.css';
import { useAuth } from 'hooks/useAuth';

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 250px;
  height: 400px;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 2;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: black;
  align-items: center;
  padding: 25px;
  font-weight: bold;
`;
const StyledButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 30%;
  transform: translate(-50%);
  background-color: transparent;
  border: 2px solid red;
  padding: 10px;
  font-weight: bold;
  color: red;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
`;
const StyledButtonBack = styled.button`
  position: absolute;
  bottom: 10px;
  left: 70%;
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
const Span = styled.div`
  color: red;
`;

const DeleteAccount = ({ setDeleteAcc }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const auth = useAuth();

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleDelete = () => {
    if (inputValue === 'usuwam konto') {
      //   auth.deleteAccount;
      setDeleteAcc(false);
    } else {
      setError('Przepisana fraza nie zgadza się.');
    }
  };
  return (
    <Wrapper>
      Czy na pewno chcesz usunąć konto? <br />
      Jeśli tak to przepisz poniżej "usuwam konto".
      <br />
      <input
        name="delete"
        type="text"
        className={styles.inputClass}
        value={inputValue}
        onChange={handleInput}
      ></input>
      <Span>{error}</Span>
      <br />
      <StyledButton onClick={handleDelete}>usuń</StyledButton>
      <StyledButtonBack onClick={() => setDeleteAcc(false)}>
        anuluj
      </StyledButtonBack>
    </Wrapper>
  );
};

export default DeleteAccount;
