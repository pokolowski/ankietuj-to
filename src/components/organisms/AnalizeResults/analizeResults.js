import React, { useState } from 'react';
import styled from 'styled-components';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import Survey from 'components/atoms/SurverForShare/survey';

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  height: auto;
  overflow: hidden;
  background-color: #0e3854;
  position: relative;
`;
const SurveysContainer = styled.div`
  width: 80%;
  min-height: 100px;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  position: relative;
  // background-color: red;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  flex-wrap: wrap;
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

const AnalizeResults = ({ surveys }) => {
  const [analizeId, setAnalizeId] = useState(null);
  return (
    <>
      <AuthorizedHeader />
      <Wrapper>
        <SurveysContainer>
          <Title>Wybierz, z której ankiety wyniki chcesz przeanalizować</Title>
          {surveys.map((surv, index) => (
            <Survey
              title={surv.name}
              description={surv.desc}
              idx={index}
              setAnalizeId={setAnalizeId}
              isAnalize="true"
            />
          ))}
        </SurveysContainer>
      </Wrapper>
    </>
  );
};

export default AnalizeResults;
