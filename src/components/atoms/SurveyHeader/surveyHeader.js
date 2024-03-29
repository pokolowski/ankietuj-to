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
  box-sizing: border-box;
  padding: 10px;
  background-color: white;
  border-radius: 20px 20px 0 0;
  border-bottom: 1px solid darkgrey;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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
  return (
    <Wrapper>
      <Title> {title} </Title>
      <Description> {desc} </Description>
    </Wrapper>
  );
};

export default SurveyHeader;
