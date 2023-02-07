import React, { useState, useEffect } from 'react';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import styled from 'styled-components';
import Survey from 'components/atoms/SurverForShare/survey';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GoBack from 'components/atoms/GoBackArrow/goBack';
import { useAPI } from 'hooks/useAPI.js';

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
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
    text-align: center;
    // background-color: red;
    // overflow: hidden;
  }
`;
const Title = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-50%);
  font-size: 22px;
  font-weight: bold;
  color: #244a6e;
  @media (max-width: 800px) {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    margin-bottom: 50px;
    // order: 1;
  }
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
  @media (max-width: 800px) {
    position: relative;
    top: auto;
    right: auto;
    order: -1;
  }
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
  @media (max-width: 900px) {
    width: 90%;
  }
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
  background-color: ${(props) => (props.err ? 'grey' : 'white')};
  opacity: 0.5;
  &:hover {
    background-color: ${(props) => (props.err ? 'grey' : '#0e3854')};
    color: ${(props) => (props.err ? 'black' : 'white')};
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
const Err = styled.p`
  color: red;
`;

const ShareUrSurvey = () => {
  //gdy użytkownik wybierze jedną z ankiet do udostępnienia doda się ona do stanu
  //gdy ankieta jest wybrana pojawia się okno z potwierdzeniem
  //po anulowaniu stan ankiety się czyści, a po wybraniu OK idzie post do bazy
  const [choosenSurvey, setChoosenSurvey] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [points, setPoints] = useState(0);
  const [refresh, setRefresh] = useState(0);
  const navigate = useNavigate();
  const api = useAPI();
  useEffect(() => {
    api.updateUsersPoints();
    api.getNotSharedUserSurveys();
  }, [refresh]);
  const confirmClick = () => {
    api.shareSurvey(choosenSurvey.id);
    setChoosenSurvey(null);
    navigate('/shareSurveys');
    setRefresh(refresh + 1);
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
            <br />
            {api.usersPoints < 5 ? (
              <Err>
                Masz za mało punktów! Wypełnij kilka ankiet, aby ubierać punkty
              </Err>
            ) : (
              <></>
            )}
          </p>
          {api.usersPoints < 5 ? (
            <ConfirmBtn err="true">OK</ConfirmBtn>
          ) : (
            <ConfirmBtn onClick={confirmClick}>OK</ConfirmBtn>
          )}
          <CancelBtn onClick={cancelClick}>Anuluj</CancelBtn>
        </Confirm>
      ) : (
        ''
      )}
      <Wrapper blur={choosenSurvey}>
        <GoBack path="/" />
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
            Masz obecnie {api.usersPoints} punktów. Dzięki temu możesz
            udostępnić {Math.floor(points / 5)} swoich ankiet.
          </Counter>
          {api.notSharedSurveys.map((surv, index) => (
            <Survey
              key={index}
              title={surv.title}
              description={surv.description}
              survey={surv}
              setSurvey={setChoosenSurvey}
            />
          ))}
        </SurveysContainer>
      </Wrapper>
    </>
  );
};

export default ShareUrSurvey;
