import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 220px;
  max-width: 270px;
  min-height: 320px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin-top: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  padding: 20px;
  &:hover {
    border: 2px solid #067eed;
  }
`;
const Title = styled.span`
  color: #244a6e;
  font-size: 20px;
  flex-grow: 3;
  text-align: center;
  font-family: 'Alata';
`;
const Description = styled.span`
  font-size: 14px;
  flex-grow: 2;
`;
const P = styled.p`
  color: #a89797;
`;

const Survey = ({
  title,
  description,
  survey,
  setSurvey,
  isAnalize,
  setAnalizeId,
  idx,
  completedCount,
}) => {
  const handleClick = () => {
    if (isAnalize === 'true') {
      setAnalizeId(idx);
      console.log('jazda');
    } else {
      setSurvey(survey);
    }
  };
  return (
    <Wrapper onClick={handleClick}>
      {isAnalize == 'true' ? <P>{completedCount}/100</P> : ''}
      <Title>{title} </Title>
      <Description>{description} </Description>
    </Wrapper>
  );
};

export default Survey;
