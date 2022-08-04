import react from 'react';
import style from './examplesurveys.module.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  position: relative;
  min-width: 350px;
  // max-width: 100%;
  min-height: 500px;
  background-color: #73d9d9;
  box-shadow: 0 5px 10px 2px #73d9d9, 0 10px 10px 5px #0e3854;
  overflow: hidden;
  font-family: 'Alata';
`;
const Title = styled.h2`
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translate(-50%);
`;

const ExampleSurveys = () => {
  return (
    <Wrapper id="SurveysExamples">
      <Title>Galeria zdjęć</Title>
    </Wrapper>
  );
};

export default ExampleSurveys;
