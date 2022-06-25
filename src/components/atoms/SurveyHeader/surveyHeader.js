import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: white;
  border-radius: 20px 20px 0 0;
  border-bottom: 1px solid darkgrey;
`;
const Title = styled.span`
  font-size: 30px;
  color: #244a6e;
  font-family: 'Alata';
  margin-bottom: 10px;
  margin-top: 10px;
`;
const Description = styled.span`
  font-size: 14px;
  color: black;
  margin-bottom: 20px;
`;

const SurveyHeader = ({ title, desc }) => {
  console.log(`${title} oraz ${desc}`);
  return (
    <Wrapper>
      <Title> {title} </Title>
      <Description> {desc} </Description>
    </Wrapper>
  );
};

export default SurveyHeader;
