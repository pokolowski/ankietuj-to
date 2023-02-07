import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import Survey from 'components/atoms/SurverForShare/survey';
import AnalizeHeader from 'components/atoms/AnalizeHeader/analizeHeader';
import axios from 'axios';
import AnalizeSurvey from 'components/molecules/AnalizeResultPage/analizeSurvey';
import GoBack from 'components/atoms/GoBackArrow/goBack';
import { useAPI } from 'hooks/useAPI';

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  height: auto;
  overflow: hidden;
  background-color: #0e3854;
  position: relative;
  @media (max-width: 500px) {
    min-height: 100vh;
  }
`;
const SurveysContainer = styled.div`
  width: 80%;
  min-height: 100px;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  position: relative;
  top: 100px;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
  flex-wrap: wrap;
  margin-bottom: 100px;
  @media (max-width: 800px) {
    top: 150px;
    margin-bottom: 250px;
  }
`;
const AnswersContainer = styled.div`
  width: 800px;
  min-height: 150px;
  height: auto;
  position: relative;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 100px;
`;
const Title = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  font-size: 22px;
  font-weight: bold;
  color: white;
`;
const ChoosenTitle = styled.span`
  position: absolute;
  top: 20px;
  left: 50px;
  font-size: 18px;
  color: white;
  font-family: 'Alata';
`;

const AnalizeResults = () => {
  const [analizeId, setAnalizeId] = useState(null);
  const api = useAPI();
  const handleChoose = (index) => {
    setAnalizeId(index);
  };
  useEffect(() => {
    api.updateSharedSurveys();
  }, []);

  return (
    <>
      <AuthorizedHeader />
      <Wrapper>
        <GoBack path="/" />
        {analizeId != null ? (
          <>
            <AnalizeSurvey survey={api.sharedSurveys[analizeId]} />
          </>
        ) : (
          <SurveysContainer>
            <Title>
              Wybierz, z której ankiety wyniki chcesz przeanalizować
            </Title>
            {api.sharedSurveys.map((surv, index) => (
              <Survey
                key={index}
                title={surv.title}
                completedCount={surv.completedSurveysCount}
                description={surv.description}
                idx={index}
                survey={surv}
                setAnalizeId={handleChoose}
                isAnalize="true"
              />
            ))}
          </SurveysContainer>
        )}
      </Wrapper>
    </>
  );
};

export default AnalizeResults;
