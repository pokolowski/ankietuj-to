import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import styles from './mainDashboard.module.css';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import SharedSurveyDashboard from 'components/molecules/SharedSurveyDashboard/sharedSurveyDashboard';
import EmptyPage from 'assets/gifs/not-found.gif';
import axios from 'axios';
import LoadingIcon from 'assets/gifs/loading.gif';
import GoBack from 'components/atoms/GoBackArrow/goBack';

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

const MainDashboard = ({
  otherSurveys,
  setOtherSurveys,
  showSurvey,
  userAnswers,
}) => {
  const [isLoading, setLoading] = useState(true);
  const [refresh, forceRefresh] = useState(0);
  useEffect(() => {
    const getSurveys = async () => {
      setLoading(true);
      let authToken = localStorage.getItem('token');
      axios.interceptors.request.use(
        (config) => {
          config.headers.authorization = `Bearer ${authToken}`;
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
      try {
        const response = await axios
          .get('api/Survey/getOtherUsersSurveys')
          .then(function (response) {
            setOtherSurveys(response.data);
            setLoading(false);
            console.log('poszlo');
          });
      } catch (e) {
        console.log(e);
      }
    };
    getSurveys();
  }, [refresh]);
  if (refresh === 0) {
    forceRefresh(1);
  }
  return (
    <>
      <AuthorizedHeader />
      <Wrapper>
        <GoBack path="/" />
        <Container>
          {isLoading ? (
            <>
              <GIF src={LoadingIcon} />
              <Span>Ładowanie ankiet</Span>
            </>
          ) : otherSurveys.length > 0 ? (
            otherSurveys.map((survey, index) => {
              return (
                <SharedSurveyDashboard
                  key={index}
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
