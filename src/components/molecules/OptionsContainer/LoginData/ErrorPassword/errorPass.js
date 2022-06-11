import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  height: 200px;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 2;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: red;
  align-items: center;
  padding: 25px;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
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

const ErrorPass1 = ({ setErrorPassword }) => {
  return (
    <Wrapper>
      Nowe hasło i potwierdzenie hasła nie zgadzają się. <br />
      Wpisz poprawnie hasło i potwierdzenie hasła.
      <StyledButton onClick={() => setErrorPassword(false)}>OK</StyledButton>
    </Wrapper>
  );
};

export default ErrorPass1;
