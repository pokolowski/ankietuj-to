import React, { useState } from 'react';
import styled from 'styled-components';
import styles from './question.module.css';
import SquareList from 'assets/icons/list-solid.svg';
import RoundList from 'assets/icons/dot.svg';
import TextIcon from 'assets/icons/font-solid.svg';
import DropDownIcon from 'assets/icons/drop-down.svg';
import Textarea from 'components/atoms/SurveyTextarea/textarea';
import Answers from '../Answers/answers';
const Wrapper = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: white;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  margin-bottom: 20px;
  border-radius: 5px;
`;
const TypeBox = styled.div`
  width: 100%;
  height: 50px;
  //   background-color: red;
  display: flex;
  font-size: 14px;
`;
const Type = styled.div`
  width: 25%;
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
`;
const IMG = styled.img`
  width: 20px;
  height: 20px;
`;

const Question = () => {
  const [typeActive, setTypeActive] = useState('1');
  const handleClick = (e) => {
    console.log(e.target);
    setTypeActive(e.target.name);
  };
  return (
    <Wrapper>
      <TypeBox>
        <Type
          className={typeActive == '1' ? styles.active : ''}
          onClick={() => setTypeActive('1')}
        >
          <IMG src={RoundList} />
          <span>Jednokrotnego wyboru</span>
        </Type>
        <Type
          className={typeActive == '2' ? styles.active : ''}
          onClick={() => setTypeActive('2')}
        >
          <IMG src={SquareList} />
          <span>Wielokropnego wyboru</span>
        </Type>
        <Type
          className={typeActive == '3' ? styles.active : ''}
          onClick={() => setTypeActive('3')}
        >
          <IMG src={TextIcon} />
          <span>Pytanie otwarte</span>
        </Type>
        <Type
          className={typeActive == '4' ? styles.active : ''}
          onClick={() => setTypeActive('4')}
        >
          <IMG src={DropDownIcon} />
          <span>Lista rozwijana</span>
        </Type>
      </TypeBox>
      <Textarea
        placeholder="Pytanie"
        width="400px"
        height="30px"
        className={styles.margin}
      />
      <Answers type={typeActive} />
    </Wrapper>
  );
};

export default Question;
