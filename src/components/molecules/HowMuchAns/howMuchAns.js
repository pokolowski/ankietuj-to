import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Alata';
`;
const Input = styled.input`
  width: 30px;
  height: 30px;
  resize: horizontal;
  border: 4px solid #067eed;
  text-align: center;
  margin-left: 50px;
  outline: none;
  &:active {
    // width: auto;
    min-width: 30px;
  }
  &:focus {
    // min-width: 20px;
    width: auto;
    max-width: 50px;
    border: 2px solid #067eed;
  }
`;

const HowMuchAns = ({ value, onChange, name }) => {
  return (
    <Wrapper>
      <span>Ile odpowiedzi potrzebujesz zebrać? (max 200) </span>
      <Input type="text" name={name} value={value} onChange={onChange}></Input>
    </Wrapper>
  );
};

export default HowMuchAns;
