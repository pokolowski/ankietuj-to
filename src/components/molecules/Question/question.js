import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import styles from './question.module.css';
import SquareList from 'assets/icons/list-solid.svg';
import RoundList from 'assets/icons/dot.svg';
import TextIcon from 'assets/icons/font-solid.svg';
import DropDownIcon from 'assets/icons/drop-down.svg';
import Textarea from 'components/atoms/SurveyTextarea/textarea';
import Answers from '../Answers/answers';
import TrashIcon from 'assets/icons/trash-solid.svg';

const Wrapper = styled.div`
  width: 100%;
  min-width: 375px;
  min-height: 300px;
  background-color: white;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  margin-bottom: 20px;
  border-radius: 5px;
  position: relative;
`;
const TypeBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  font-size: 14px;
`;
const Type = styled.div`
  width: 33.33333%;
  hieght: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-bottom: 1px solid #0085ff;
    background-color: #dae5f4;
  }
  @media (max-width: 500px) {
    text-align: center;
  }
`;
const IMG = styled.img`
  width: 20px;
  height: 20px;
`;
const Trash = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 30px;
  bottom: 15px;
  cursor: pointer;
`;

const Question = ({
  questions,
  changeQuestion,
  deleteQuestion,
  changeType,
  idx,
  changeAnswers,
}) => {
  const [typeActive, setTypeActive] = useState('1');
  const handleClick = (type) => {
    setTypeActive(`${type}`);
    changeType(type, idx);
  };
  const handleDeleteQuestion = () => {
    deleteQuestion(idx);
  };

  return (
    <Wrapper>
      <TypeBox>
        <Type
          className={typeActive == '1' ? styles.active : ''}
          onClick={() => handleClick('1')}
        >
          <IMG src={RoundList} />
          <span>Jednokrotnego wyboru</span>
        </Type>
        <Type
          className={typeActive == '2' ? styles.active : ''}
          onClick={() => handleClick('2')}
        >
          <IMG src={SquareList} />
          <span>Wielokropnego wyboru</span>
        </Type>
        <Type
          className={typeActive == '3' ? styles.active : ''}
          onClick={() => handleClick('3')}
        >
          <IMG src={TextIcon} />
          <span>Pytanie otwarte</span>
        </Type>
      </TypeBox>
      <Textarea
        placeholder="Pytanie"
        width="400px"
        height="30px"
        className={styles.margin}
        value={questions[idx].question}
        onChange={(e) => changeQuestion(e, idx)}
      />
      <Answers type={typeActive} changeAnswers={changeAnswers} idx={idx} />
      <Trash src={TrashIcon} onClick={handleDeleteQuestion} />
    </Wrapper>
  );
};

export default Question;
