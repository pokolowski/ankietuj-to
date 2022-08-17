import React from 'react';
import styled from 'styled-components';
import styles from './mainDashboard.module.css';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import SharedSurveyDashboard from 'components/molecules/SharedSurveyDashboard/sharedSurveyDashboard';
import EmptyPage from 'assets/gifs/not-found.gif';

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
  // background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;
const Span = styled.span`
  text-transform: uppercase;
  font-family: 'Alata';
  // font-weight: bold;
  font-size: 26px;
  text-align: center;
`;

const MainDashboard = ({ surveys, showSurvey, userAnswers }) => {
  console.log(userAnswers);

  return (
    <>
      <AuthorizedHeader />
      <Wrapper>
        <Container>
          {surveys.length > 0 ? (
            surveys.map((survey, index) => {
              return (
                <SharedSurveyDashboard
                  surveys={survey}
                  idx={index}
                  showSurvey={showSurvey}
                />
              );
            })
          ) : (
            <>
              <img src={EmptyPage}></img>
              <Span>
                Brak ankiet do wypełnienia
                <br /> spróbuj później
              </Span>
            </>
          )}
        </Container>
      </Wrapper>
    </>
  );
};

export default MainDashboard;
