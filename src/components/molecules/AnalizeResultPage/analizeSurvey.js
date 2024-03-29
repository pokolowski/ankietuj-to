import React from 'react';
import styled from 'styled-components';
import AnalizeHeader from 'components/atoms/AnalizeHeader/analizeHeader';
import AnalizeQuestion from 'components/atoms/AnalizeQuestion/analizeQuestion';
import Surveys from 'components/organisms/AuthorizedView/Surveys/surveys';

const ChoosenTitle = styled.span`
  position: absolute;
  top: 20px;
  left: 50px;
  font-size: 18px;
  color: white;
  font-family: 'Alata';
`;
const AnswersContainer = styled.div`
  width: 1000px;
  min-height: 150px;
  height: auto;
  position: relative;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 300px;
  @media (max-width: 999px) {
    width: 100%;
  }
`;

const AnalizeSurvey = (survey, analizedId) => {
  const surv = survey.survey;
  return (
    <>
      <ChoosenTitle>{surv.title}</ChoosenTitle>
      <AnswersContainer>
        <AnalizeHeader countAnswers={surv.completedSurveysCount} />
        {surv.questions.map((question, index) => {
          return <AnalizeQuestion key={index} survey={surv} q={question} />;
        })}
      </AnswersContainer>
    </>
  );
};

export default AnalizeSurvey;
