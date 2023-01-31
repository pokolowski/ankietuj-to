import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import styles from './mainDashboard.module.css';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import SharedSurveyDashboard from 'components/molecules/SharedSurveyDashboard/sharedSurveyDashboard';
import EmptyPage from 'assets/gifs/not-found.gif';
import axios from 'axios';
import LoadingIcon from 'assets/gifs/loading.gif';
import GoBack from 'components/atoms/GoBackArrow/goBack';
import { useAPI } from 'hooks/useAPI';
const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  position: relative;
  @media (max-width: 900px) {
    min-height: 100vh;
  }
`;
const Container = styled.div`
  width: 50%;
  min-height: 300px;
  height: auto;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 500px) {
    top: 70px;
    width: 100%;
    // left: 0;
    // transform: none;
  }
`;
const Span = styled.span`
  text-transform: uppercase;
  font-family: 'Alata';
  font-size: 26px;
  text-align: center;
`;
const GIF = styled.img`
  width: 80px;
  height: 80px;
`;

const MainDashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const [refresh, forceRefresh] = useState(0);
  const api = useAPI();

  const reverseArray = (arr) => {
    const tempArr = [];
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i]) tempArr.unshift(arr[i]);
    }
    return tempArr;
  };
  useEffect(() => {
    api.getOtherUsersSurveys();
  }, []);
  return (
    <>
      <AuthorizedHeader />
      <Wrapper>
        <GoBack path="/" />
        <Container>
          {api.isLoading ? (
            <>
              <GIF src={LoadingIcon} />
              <Span>Ładowanie ankiet</Span>
            </>
          ) : api.otherUsersSurveys.length > 0 ? (
            api.otherUsersSurveys.map((survey, index) => {
              return (
                <SharedSurveyDashboard
                  key={survey.id}
                  surv={survey}
                  idx={survey.id}
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
