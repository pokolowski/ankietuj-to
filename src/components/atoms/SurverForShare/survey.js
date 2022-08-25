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
  font-family: 'Alata';
`;
const Description = styled.span`
  font-size: 14px;
`;

const Survey = ({ title, description, survey, setSurvey }) => {
  const handleClick = () => {
    setSurvey(survey);
  };
  return (
    <Wrapper onClick={handleClick}>
      <Title>{title} </Title>
      <Description>{description} </Description>
    </Wrapper>
  );
};

export default Survey;
