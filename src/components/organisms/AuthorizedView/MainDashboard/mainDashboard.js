import React, { useEffect } from 'react';
import styled from 'styled-components';
import styles from './mainDashboard.module.css';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import SharedSurveyDashboard from 'components/molecules/SharedSurveyDashboard/sharedSurveyDashboard';
import EmptyPage from 'assets/gifs/not-found.gif';
import axios from 'axios';

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

const MainDashboard = ({
  otherSurveys,
  setOtherSurveys,
  showSurvey,
  userAnswers,
}) => {
  console.log(userAnswers);

  useEffect(() => {
    const getSurveys = async () => {
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
            // addSurveys(response.data);
          });
      } catch (e) {
        console.log(e);
      }
    };
    getSurveys();
  }, []);

  return (
    <>
      <AuthorizedHeader />
      <Wrapper>
        <Container>
          {otherSurveys.length > 0 ? (
            otherSurveys.map((survey, index) => {
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
