import React from 'react';
import styled from 'styled-components';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import SurveyHeader from 'components/atoms/SurveyHeader/surveyHeader';
import SurveyQuestion from 'components/atoms/SurveyQuestion/surveyQuestion';
import GoBack from 'components/atoms/GoBackArrow/goBack';
import { useAPI } from 'hooks/useAPI';

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  height: auto;
  background-color: #dae5f4;
  position: relative;
  overflow: hidden;
`;
const BackIcon = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  left: 50px;
  transform: rotate(180deg);
  cursor: pointer;
`;
const SurveyContainer = styled.div`
  width: 800px;
  min-height: 150px;
  height: auto;
  position: relative;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 100px;
  @media (max-width: 500px) {
    width: 100%;
    top: 70px;
  }
`;

const ShowSurveyView = () => {
  let surv;
  const api = useAPI();
  const breakError = {};
  try {
    api.usersSurveys.forEach((survey) => {
      if (survey.id == api.surveyIDToPreview) {
        surv = survey;
        throw breakError;
      }
    });
  } catch (err) {
    if (err !== breakError) throw err;
  }
  return (
    <>
      <AuthorizedHeader />
      <Wrapper>
        <GoBack path="/surveys" />
        <SurveyContainer>
          <SurveyHeader
            title={surv.title}
            desc={surv.description}
          ></SurveyHeader>

          {surv.questions.map((q, index) => (
            <SurveyQuestion
              question={q.value}
              type={q.questionTypeId}
              answers={q.suggestedanswers}
              questionIndex={index}
              key={index}
            />
          ))}
        </SurveyContainer>
      </Wrapper>
    </>
  );
};

export default ShowSurveyView;
