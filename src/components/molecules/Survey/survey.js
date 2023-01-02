import React from 'react';
import styled from 'styled-components';
import styles from './survey.module.css';
import ShareIconOrange from 'components/atoms/ShareIconOrange/shareIconOrange';
import Icon from 'assets/headerIcons/share.svg';
import { useNavigate } from 'react-router-dom';
const Wrapper = styled.div`
  position: relative;
  min-width: 20%;
  width: auto;
  max-width: 340px;
  min-height: 150px;
  height: auto;
  //test
  min-width: 300px;
  height: 400px;
  //koniec testu

  box-sizing: border-box;
  padding: 10px;
  background-color: white;
  margin-top: 30px;
  margin-left: 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: 'Alata';
  color: #244a6e;
  cursor: pointer;
  &:hover {
    border: 1px solid #067eed;
  }
  @media (max-width: 900px) {
    min-width: 100%;
    margin: 0;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 2px;
  background: rgb(6, 126, 237);
  background: linear-gradient(
    90deg,
    rgba(6, 126, 237, 1) 0%,
    rgba(14, 56, 84, 1) 50%,
    rgba(6, 126, 237, 1) 100%
  );
  position: absolute;
  top: 1px;
`;
const BtnsContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-transform: uppercase;
  overflow: hidden;
  position: relative;
`;
const IMG = styled.img`
  width: 25px;
  height: 25px;
`;
const Span = styled.div`
  &:hover {
    color: #067eed;
  }
`;
const DisableSpan = styled.div`
  color: grey;
  text-decoration: line-through;
  &:hover {
    color: grey;
  }
`;

const Survey = ({
  title,
  desc,
  deleteSurvey,
  idx,
  showSurvey,
  surveyId,
  editSurvey,
}) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <h2>{title}</h2>

      <BtnsContainer>
        <Line></Line>
        <Span onClick={() => showSurvey(surveyId)}>Zobacz</Span>
        <DisableSpan onClick={() => /*editSurvey(idx)*/ ''}>Edytuj</DisableSpan>
        <Span onClick={() => deleteSurvey(surveyId)}>usuń</Span>
        <IMG src={Icon} onClick={() => navigate('/shareSurveys')} />
      </BtnsContainer>
    </Wrapper>
  );
};

export default Survey;
