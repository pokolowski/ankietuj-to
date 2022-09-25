import React, { useState, useEffect } from 'react';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import styled from 'styled-components';
import Survey from 'components/atoms/SurverForShare/survey';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  // height: auto;
  position: relative;
  overflow: hidden;
  background-color: #19a4e3;
  filter: blur(${(props) => (props.blur ? '1px' : '0px')});
  transition: 0.5s linear;
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
  // top: 400px;
  left: 50%;
  transform: translateX(-50%);
  flex-wrap: wrap;
  margin-bottom: 100px;
`;
const Title = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-50%);
  font-size: 22px;
  font-weight: bold;
  color: #244a6e;
`;
const Disclaimer = styled.div`
  width: 60%;
  min-height: 100px;
  padding: 20px;
  margin-bottom: 150px;
  position: relative;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  // background-color: #eeeeee;
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  // box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
  //   rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  font-size: 20px;
  font-family: 'Alata';
  text-align: center;
`;
const Counter = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%);
  font-size: 18px;
  color: #244a6e;
`;
const Span = styled.span`
  color: blue;
`;
const Confirm = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  height: 350px;
  padding: 50px;
  background-color: white;
  border-radius: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  z-index: 2;
  font-family: 'Alata';
`;
const ConfirmBtn = styled.div`
  position: absolute;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 35px;
  font-weight: bold;
  cursor: pointer;
  bottom: 10px;
  font-family: 'Alata';
  left: 25%;
  transform: translateX(-50%);
  transition: 0.2s linear;
  &:hover {
    background-color: #0e3854;
    color: white;
  }
`;
const CancelBtn = styled.div`
  position: absolute;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 35px;
  font-weight: bold;
  cursor: pointer;
  bottom: 10px;
  font-family: 'Alata';
  right: 25%;
  transform: translateX(50%);
  transition: 0.2s linear;
  &:hover {
    background-color: #0e3854;
    color: white;
  }
`;

const ShareUrSurvey = ({ user, notSharedSurveys, shareSurvey }) => {
  //gdy użytkownik wybierze jedną z ankiet do udostępnienia doda się ona do stanu
  //gdy ankieta jest wybrana pojawia się okno z potwierdzeniem oraz background robi się blur
  //po anulowaniu stan ankiety się czyści, a po wybraniu OK idzie post do bazy
  const [choosenSurvey, setChoosenSurvey] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [points, setPoints] = useState(0);
  const [refresh, setRefresh] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    // addSurveys(null);

    const getSurveys = async () => {
      // if (notSharedSurveys != []) {
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
      //Pobieranie ankiet mozliwych do udostępnienia
      try {
        const response = await axios
          .get('api/Survey/getUserInactiveSurveys')
          .then(function (response) {
            shareSurvey(response.data);
            setLoading(false);
          });
      } catch (e) {
        console.log(e);
      }
      //Pobieranie ilościu punktów
      try {
        const response = await axios
          .get('api/Account/getUserPoints')
          .then(function (response) {
            setPoints(response.data);
          });
      } catch (e) {
        console.log(e);
      }
      // }
    };
    getSurveys();
  }, [refresh]);
  const handleShareSurvey = async (id) => {
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
    const count = 100;
    try {
      const response = await axios.post(
        `/api/Survey/shareSurvey?surveyid=${id}`
      );
    } catch (e) {
      console.log(e);
    }
  };
  const confirmClick = () => {
    handleShareSurvey(choosenSurvey.id);
    setChoosenSurvey(null);
    navigate('/shareSurveys');
    setRefresh(refresh + 1);
    this.render();
  };
  const cancelClick = () => {
    setChoosenSurvey(null);
  };
  return (
    <>
      <AuthorizedHeader />
      {choosenSurvey ? (
        <Confirm>
          <h2>Udostępnianie ankiety</h2>
          <p>
            Czy na pewno chcesz udostępnić ankietę o tytule{' '}
            <Span>{choosenSurvey.title}</Span>?
          </p>
          <ConfirmBtn onClick={confirmClick}>OK</ConfirmBtn>
          <CancelBtn onClick={cancelClick}>Anuluj</CancelBtn>
        </Confirm>
      ) : (
        ''
      )}
      <Wrapper blur={choosenSurvey}>
        <Disclaimer>
          <div>
            <h2>Chcesz udostępnić swoją ankietę?</h2>
            Możesz to zrobić jednym kliknięciem! Jednak, aby to zrobić musisz
            najpierw uzbierać <Span>5 punktów. </Span>Za każdą wypełnioną
            ankietę dostajesz 1 punkt. Ankiety możesz wypełniać{' '}
            <NavLink to="/dashboard">w tym miejscu</NavLink>.
            <br />
            Dzięki temu systemowi Ty, oraz inni użytkownicy zbierzecie potrzebną
            ilość odpowiedzi do swoich ankiet w możliwie najkrótszym czasie!
          </div>
        </Disclaimer>
        <SurveysContainer>
          <Title>Wybierz, którą ankietę chcesz udostępnić</Title>
          <Counter>
            Masz obecnie {points} punktów. Dzięki temu możesz udostępnić{' '}
            {Math.floor(points / 5)} swoich ankiet.
          </Counter>
          {notSharedSurveys.map((surv, index) => (
            <Survey
              key={index}
              title={surv.title}
              description={surv.description}
              survey={surv}
              setSurvey={setChoosenSurvey}
              onClick={handleShareSurvey}
            />
          ))}
        </SurveysContainer>
      </Wrapper>
    </>
  );
};

export default ShareUrSurvey;
