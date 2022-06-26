import React, { useState } from 'react';
import styled from 'styled-components';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import GoBack from 'components/atoms/GoBackArrow/goBack';
import SurveyHeader from 'components/atoms/SurveyHeader/surveyHeader';
import SurveyQuestion from 'components/atoms/SurveyQuestion/surveyQuestion';

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  height: auto;
  background-color: #dae5f4;
  position: relative;
  overflow: hidden;
  //   margin-bottom: 30px;
`;
const SurveyContainer = styled.div`
  width: 800px;
  min-height: 150px;
  height: auto;
  position: relative;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  //   border: 1px solid black;
  margin-bottom: 100px;
`;
const SaveBtn = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  background-color: #067eed;
  color: white;
  font-family: 'Alata';
  display: flex;
  font-size: 25px;
  letter-spacing: 3px;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  border: 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset;
  margin-bottom: 50px;
  margin-top: 20px;
`;

const CompleteSurveys = ({
  survey,
  userAnswers,
  setUsersAnswers,
  idSurvey,
}) => {
  console.log(survey);
  const [getAnswers, setGetAnswers] = useState([{ question: '', answers: [] }]);
  const handleClick = () => {
    console.log(getAnswers);
  };
  return (
    <>
      <AuthorizedHeader />
      <Wrapper>
        <GoBack path="/dashboard" />
        <SurveyContainer>
          <SurveyHeader title={survey.name} desc={survey.desc} />
          {survey.questions.map((q, index) => (
            <SurveyQuestion
              question={q.question}
              type={q.questionType}
              answers={q.answers}
              questionIndex={index}
              getAnswers={getAnswers}
              setGetAnswers={setGetAnswers}
            />
          ))}
          <SaveBtn as="button" onClick={handleClick}>
            Wyślij swoje odpowiedzi
          </SaveBtn>
        </SurveyContainer>
      </Wrapper>
    </>
  );
};

export default CompleteSurveys;
