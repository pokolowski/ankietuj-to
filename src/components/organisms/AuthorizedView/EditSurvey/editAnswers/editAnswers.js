import React, { useState } from 'react';
import styled from 'styled-components';
import Option from 'components/molecules/Answers/Option/option.js';
import { Circle } from './Option/option';
import OpenQuestionPrev from 'components/atoms/OpenQuestionPrev/openQuestionPrev';

const Wrapper = styled.div`
  width: calc(100% - 20px);
  min-height: 200px;
  margin-top: 50px;
  margin-left: 20px;
  margin-bottom: 20px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Alata';
  margin-bottom: 20px;
  border-bottom: 20px solid white;
`;
const Input = styled.input`
  background-color: transparent;
  width: 200px;
  border: 0;
  border-bottom: 2px solid grey;
  margin-left: 20px;
  font-size: 15px;
  &:focus {
    border: 0;
    outline: none;
    border-bottom: 2px solid #067eed;
  }
`;

const EditAnswers = ({ type, changeAnswers, idx }) => {
  const [counting, addCount] = useState([1]);
  const [options, setOptions] = useState([{ option: 'Odpowiedź 1' }]);
  const handleAddOption = () => {
    setOptions([...options, { option: `Odpowiedź ${options.length + 1}` }]);
  };
  const handleDeleteOption = (index) => {
    const tempArr = [...options];
    tempArr.splice(index, 1);
    setOptions(tempArr);
    changeAnswers(tempArr);
  };
  const handleChangeOption = (e, index) => {
    const tempArr = [...options];
    tempArr[index].option = e.target.value;
    setOptions(tempArr);
    changeAnswers(tempArr, idx);
  };
  return (
    <Wrapper>
      {type === '1' || type === '2' ? (
        <>
          <Option
            answers={options}
            deleteAnswer={handleDeleteOption}
            changeAnswer={handleChangeOption}
            type={type}
          />
          <Button onClick={handleAddOption}>
            <Circle type={type} />
            <Input value="Dodaj następną odpowiedź" readOnly />
          </Button>
        </>
      ) : type === '3' ? (
        <OpenQuestionPrev />
      ) : (
        ''
      )}
    </Wrapper>
  );
};

export default EditAnswers;
