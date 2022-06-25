import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 200px;
  padding: 30px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Btn = styled.div`
  width: 150px;
  height: 40px;
  border: 2px solid #067eed;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Alata';
  color: black;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    border: 0;
    background-color: #067eed;
    color: white;
  }
`;
const Span = styled.span`
  color: red;
  font-weight: bold;
  //   margin-top: 50px;
  text-align: center;
`;

const ErrorContainer = ({ err, deleteErr }) => {
  return (
    <Wrapper>
      <Span>{err}</Span>
      <Btn onClick={() => deleteErr('')}>Rozumiem</Btn>
    </Wrapper>
  );
};

export default ErrorContainer;
