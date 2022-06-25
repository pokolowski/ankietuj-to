import React from 'react';
import styled from 'styled-components';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import IMG from 'components/atoms/IMG/img';
import ArrowIcon from 'assets/icons/arrow-right-solid.svg';
import SurveyHeader from 'components/atoms/SurveyHeader/surveyHeader';
import { useNavigate } from 'react-router-dom';
import SurveyQuestion from 'components/atoms/SurveyQuestion/surveyQuestion';

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
  const navigate = useNavigate();
  const surv = surveys[idSurvey];
  console.log(surv);
  return (
    <>
      <AuthorizedHeader />
      <Wrapper>
        <BackIcon src={ArrowIcon} onClick={() => navigate('/surveys')} />
        <SurveyContainer>
          <SurveyHeader title={surv.name} desc={surv.desc}></SurveyHeader>

          {surv.questions.map((q, index) => (
            <SurveyQuestion
              question={q.question}
              type={q.questionType}
              answers={q.answers}
              questionIndex={index}
            />
          ))}
        </SurveyContainer>
      </Wrapper>
    </>
  );
};

export default ShowSurveyView;
