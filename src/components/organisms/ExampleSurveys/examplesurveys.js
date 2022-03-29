import react from 'react';
import style from './examplesurveys.module.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  min-height: 500px;
  background-color: #73d9d9;
  box-shadow: 0 5px 10px 2px #73d9d9, 0 10px 10px 5px #0e3854;
`;

const ExampleSurveys = () => {
  return <Wrapper id="SurveysExamples"></Wrapper>;
};

export default ExampleSurveys;
