import React from 'react';
import styled from 'styled-components';
import styles from './mainDashboard.module.css';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import SharedSurveyDashboard from 'components/molecules/SharedSurveyDashboard/sharedSurveyDashboard';

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  position: relative;
  //   background-color: red;
`;
const Container = styled.div`
  width: 50%;
  min-height: 300px;
  height: auto;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  //   border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const MainDashboard = () => {
  return (
    <>
      <AuthorizedHeader />
      <Wrapper>
        <Container>
          <SharedSurveyDashboard />
          <SharedSurveyDashboard />
          <SharedSurveyDashboard />
          <SharedSurveyDashboard />
          <SharedSurveyDashboard />
          <SharedSurveyDashboard />
          <SharedSurveyDashboard />
          <SharedSurveyDashboard />
          <SharedSurveyDashboard />
          <SharedSurveyDashboard />
          <SharedSurveyDashboard />
          <SharedSurveyDashboard />
          <SharedSurveyDashboard />
          <SharedSurveyDashboard />
          <SharedSurveyDashboard />
          <SharedSurveyDashboard />
          <SharedSurveyDashboard />
          <SharedSurveyDashboard />
          <SharedSurveyDashboard />
          <SharedSurveyDashboard />
        </Container>
      </Wrapper>
    </>
  );
};

export default MainDashboard;
