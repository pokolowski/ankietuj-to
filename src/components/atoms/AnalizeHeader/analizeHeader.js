import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  border-radius: 20px 20px 0 0;
  box-shadow: grey 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-family: 'Alata';
  text-align: center;
  margin-top: 50px;
`;

const AnalizeHeader = ({ countAnswers }) => {
  return <Wrapper>Twoja ankieta zebrała {countAnswers} odpowiedzi!</Wrapper>;
};

export default AnalizeHeader;
