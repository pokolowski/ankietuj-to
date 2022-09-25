import React from 'react';
import styled from 'styled-components';
import xIcon from 'assets/icons/Xcross-orange.svg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;
export const Circle = styled.div`
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: ${(props) => (props.type === '1' ? '50%' : '0')};
  border: 2px solid grey;
`;
const Input = styled.input`
  background-color: transparent;
  width: 400px;
  // font-weight: bold;
  font-family: 'Alata';
  border: 0;
  border-bottom: 2px solid grey;
  margin-left: 20px;
  font-size: 15px;
  &:focus {
    border: 0;
    outline: none;
    border-bottom: 2px solid #067eed;
    // background-color: #f2f2f2;
  }
`;
const IMG = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
  margin-left: 20px;
`;

const Option = ({ number, deleteAnswer, type, answers, changeAnswer }) => {
  const handleDelete = (e) => {
    deleteAnswer(e.target.getAttribute('id'));
  };
  const handleFocus = (event) => event.target.select();
  return (
    <>
      {answers.map((answer, idx) => (
        <Container key={idx}>
          <Circle type={type} />
          <Input
            type="text"
            autoFocus
            onFocus={handleFocus}
            value={answers[idx].option}
            onChange={(e) => changeAnswer(e, idx)}
          />
          <IMG id={`${idx}`} src={xIcon} onClick={() => deleteAnswer(idx)} />
        </Container>
      ))}
    </>
  );
};

export default Option;
