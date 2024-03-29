import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import PlusIcon from 'assets/icons/plus.svg';
import Survey from 'components/molecules/Survey/survey';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingIcon from 'assets/gifs/loading.gif';
import GoBack from 'components/atoms/GoBackArrow/goBack';
import { useAPI } from 'hooks/useAPI';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 100px);
  background-color: #bde0fe;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    min-height: 100vh;
  }
`;
const Container = styled.div`
  width: 70%;
  min-height: 700px;
  height: auto;
  margin-top: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const CreateSurvey = styled.div`
  width: 230px;
  height: 270px;
  background-color: white;
  border-radius: 10px;
  border: 2px dotted #067eed;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  color: #067eed;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 3px groove #067eed;
  }
`;
const Img = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Hr = styled.div`
  width: 600%;
  height: 2px;
  position: absolute;
  bottom: -100px;
  background: rgb(189, 224, 254);
  background: linear-gradient(
    90deg,
    rgba(189, 224, 254, 1) 0%,
    rgba(6, 126, 237, 1) 50%,
    rgba(189, 224, 254, 1) 100%
  );
  &::after {
    content: 'Twoje ankiety';
    position: relative;
    top: 30px;
  }
`;
const YourSurveys = styled.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  height: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  &::before {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    top: -20px;
    background: rgb(189, 224, 254);
    background: linear-gradient(
      90deg,
      rgba(189, 224, 254, 1) 0%,
      rgba(6, 126, 237, 1) 50%,
      rgba(189, 224, 254, 1) 100%
    );
  }
  @media (max-width: 900px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;
const Title = styled.span`
  position: absolute;
  top: 0;
  left: 20px;
  font-weight: bold;
  font-size: 16px;
  color: #244a6e;
  @media (max-width: 500px) {
    top: -10px;
  }
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  color: #a89797;
  letter-spacing: 1px;
`;
const GIF = styled.img`
  width: 80px;
  height: 80px;
`;

const Surveys = ({ surveys, editSurvey }) => {
  const [sur, setSur] = useState([]);
  const navigate = useNavigate();
  const api = useAPI();

  const handleOnClick = () => {
    navigate('/createSurvey');
  };
  const reverseArray = (arr) => {
    const tempArr = [];
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i]) tempArr.unshift(arr[i]);
    }
    return tempArr;
  };

  // useEffect(() => {
  //   const reversedSurveysArr = reverseArray(surveys);
  //   setSur(reversedSurveysArr);
  // }, [surveys]);

  useEffect(() => {
    const getSurveys = () => {
      api.getUsersSurveys();
    };
    getSurveys();
  }, []);
  return (
    <>
      <AuthorizedHeader />
      <Wrapper>
        <GoBack path="/" />
        <Container>
          <CreateSurvey onClick={handleOnClick}>
            <Div>
              <Img src={PlusIcon} />
              STWÓRZ ANKIETĘ
            </Div>
            {/* <Hr /> */}
          </CreateSurvey>
          <YourSurveys>
            <Title>Twoje ankiety</Title>
            {api.isLoading ? (
              <Info>
                <GIF src={LoadingIcon} />
                <br />
                <span>Trwa ładowanie Twoich ankiet</span>
              </Info>
            ) : api.usersSurveys.length == 0 ? (
              <Info>
                <span>posiadasz narazie 0 ankiet</span>
              </Info>
            ) : (
              api.usersSurveys.map((survey, index) => (
                <Survey
                  title={survey.title}
                  desc={survey.description}
                  idx={index}
                  key={index}
                  surveyId={survey.id}
                  editSurvey={editSurvey}
                />
              ))
            )}
          </YourSurveys>
        </Container>
      </Wrapper>
    </>
  );
};

export default Surveys;
