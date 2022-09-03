import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 400px;
  height: 350px;
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
  box-sizing: border-box;
  padding: 30px;
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
const Contener = styled.div``;

const ErrorPass1 = ({ setErrorPassword }) => {
  return (
    <Wrapper>
      <Contener>
        <p>
          Nowe hasło i potwierdzenie hasła nie zgadzają się lub hasło jest za
          krótkie.
        </p>
        <p>Hasło musi posiadać minimum 8 znaków.</p>
        <p>Wpisz poprawnie hasło i potwierdzenie hasła.</p>
      </Contener>

      <StyledButton onClick={() => setErrorPassword(false)}>OK</StyledButton>
    </Wrapper>
  );
};

export default ErrorPass1;
