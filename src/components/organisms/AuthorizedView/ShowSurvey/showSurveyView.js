import React from 'react';
import styled from 'styled-components';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import SurveyHeader from 'components/atoms/SurveyHeader/surveyHeader';
import SurveyQuestion from 'components/atoms/SurveyQuestion/surveyQuestion';
import GoBack from 'components/atoms/GoBackArrow/goBack';

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  height: auto;
  background-color: #dae5f4;
  position: relative;
  overflow: hidden;
  // margin-bottom: 30px;
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
  // border: 1px solid black;
  margin-bottom: 100px;
`;

const ShowSurveyView = ({ idSurvey, surveys }) => {
  const surv = surveys[idSurvey];
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
            />
          ))}
        </SurveyContainer>
      </Wrapper>
    </>
  );
};

export default ShowSurveyView;
