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
  align-items: center;
  text-align: center;
  color: black;
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
const Input = styled.input`
  self-align: felx-start;
`;

const DeleteAccount = ({ setDeleteAcc, close }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const auth = useAuth();

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleDelete = () => {
    if (inputValue === 'usuwam konto') {
      auth.deleteAccount();
      console.log('usuwanko');
      // setDeleteAcc(false);
      // close();
    } else {
      setError('Przepisana fraza nie zgadza się.');
    }
  };
  return (
    <Wrapper>
      Czy na pewno chcesz usunąć konto? <br />
      Jeśli tak to przepisz poniżej "usuwam konto".
      <br />
      <Input
        name="delete"
        type="text"
        className={styles.inputClass}
        value={inputValue}
        onChange={handleInput}
      ></Input>
      <Span>{error}</Span>
      <br />
      <StyledButton onClick={handleDelete}>usuń</StyledButton>
      <StyledButtonBack
        onClick={() => {
          setDeleteAcc(false);
          close();
        }}
      >
        anuluj
      </StyledButtonBack>
    </Wrapper>
  );
};

export default DeleteAccount;
