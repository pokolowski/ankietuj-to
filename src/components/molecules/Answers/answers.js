import React, { useState } from 'react';
import styled from 'styled-components';
import Option from './Option/option';
import { Circle } from './Option/option';

const Wrapper = styled.div`
  width: calc(100% - 20px);
  min-height: 200px;
  // border: 1px solid black;
  margin-top: 50px;
  margin-left: 20px;
  margin-bottom: 20px;
`;
const Button = styled.div`
  // width: 150px;
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
    // background-color: #f2f2f2;
  }
`;

const Answers = ({ type, changeAnswers, idx }) => {
  const [counting, addCount] = useState([1]);
  const [options, setOptions] = useState([{ option: 'Odpowiedź 1' }]);
  // const addAnswer = () => {
  //   addCount([...counting, counting.length + 1]);
  // };
  // const deleteAnswer = (index) => {
  //   console.log(index);
  //   let tablica = [...counting];
  //   console.log(`${index} z tablicy ${tablica}`);
  //   tablica.splice(index, 1);
  //   console.log(`po usunieciu zostaje ${tablica}`);
  //   addCount(tablica);
  //   this.forceUpdate();
  //   console.log(index);
  //   console.log(counting);
  // };
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
      <Option
        // number={counting[counting.length - 1]}
        // answers={counting}
        answers={options}
        deleteAnswer={handleDeleteOption}
        changeAnswer={handleChangeOption}
        type={type}
      />
      <Button onClick={handleAddOption}>
        <Circle type={type} />
        <Input value="Dodaj następną odpowiedź" />
      </Button>
    </Wrapper>
  );
};

export default Answers;
