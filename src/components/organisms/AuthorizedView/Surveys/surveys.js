import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import PlusIcon from 'assets/icons/plus.svg';
import Survey from 'components/molecules/Survey/survey';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 100px);
  // height: auto;
  background-color: #bde0fe;
  display: flex;
  justify-content: center;
  align-items: center;
  // overflow: scroll;
  @media (max-width: 500px) {
    min-height: 100vh;
  }
`;
const Container = styled.div`
  width: 70%;
  min-height: 700px;
  height: auto;
  // background-color: red;
  // border: 1px solid black;
  margin-top: 50px;
  position: relative;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
`;
const CreateSurvey = styled.div`
  width: 230px;
  height: 270px;
  background-color: white;
  border-radius: 10px;
  border: 2px dotted #067eed;
  // position: absolute;
  // top: 30px;
  // left: calc(50% - 100px);
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
  // background-color: grey;
  background: rgb(189, 224, 254);
  background: linear-gradient(
    90deg,
    rgba(189, 224, 254, 1) 0%,
    rgba(6, 126, 237, 1) 50%,
    rgba(189, 224, 254, 1) 100%
  );
  // color: red;
  &::after {
    content: 'Twoje ankiety';
    position: relative;
    top: 30px;
  }
`;
const YourSurveys = styled.div`
  position: relative;
  // top: 50%;
  // bottom: ;
  // left: 0;
  width: 100%;
  min-height: 300px;
  height: auto;
  margin-top: 50px;
  // background-color: red;
  // padding: 10px;
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
`;
const Title = styled.span`
  position: absolute;
  top: 0;
  left: 20px;
  font-weight: bold;
  font-size: 16px;
  color: #244a6e;
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  color: #a89797;
  letter-spacing: 1px;
  // background-color: red;
`;

const Surveys = ({ surveys, addSurveys, deleteSurvey, showSurvey }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/createSurvey');
  };
  const [sur, setSur] = useState([]);
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
          .get('api/Survey/getUserSurveys')
          .then(function (response) {
            console.log(response.data);
            setSur(response.data);
            addSurveys(response.data);
          });
        // let decoded = jwt_decode(response.data);
        // console.log(decoded);
        // setUser({
        //   id: decoded.Id,
        //   imie: decoded.Name,
        //   nazwisko: decoded.Surname,
        //   email: decoded.Email
        // })
        // console.log(response.data);
        // navigate(`/`);
        // localStorage.setItem('token', response.data);
      } catch (e) {
        console.log(e);
        // dispatchError('Invalid email or password');
        // test przekierowania
        // setUser({
        //   imie: 'Patryk',
        //   nazwisko: 'Okolowski',
        //   email: 'pokolowski@edu.cdv.pl',
        //   haslo: 'silneHaslo',
        // });
        // console.log(user);
        // localStorage.setItem('token', user);
        // navigate(`/`);
        // // koniec testu
        // console.log(e);

        //
        // [
        //   {
        //     title: 'asdasd',
        //     description: 'asdasd',
        //     createdAt: '2022-08-22T18:19:30',
        //     isActive: 0,
        //     answersGoal: 100,
        //     userId: 10,
        //     completedSurveys: null,
        //     questions: [
        //       {
        //         value: 'q1',
        //         questionTypeId: 1,
        //         suggestedanswers: [
        //           {
        //             value: 'a1',
        //           },
        //           {
        //             value: 'a2',
        //           },
        //           {
        //             value: 'a3',
        //           },
        //         ],
        //       },
        //       {
        //         value: 'q2',
        //         questionTypeId: 2,
        //         answers: [],
        //         suggestedanswers: [
        //           {
        //             value: 'a1',
        //           },
        //           {
        //             value: 'a2',
        //           },
        //           {
        //             value: 'a3',
        //           },
        //         ],
        //       },
        //       {
        //         value: 'q3',
        //         questionTypeId: 3,
        //         answers: [],
        //         suggestedanswers: [],
        //       },
        //     ]
        //   },
        // ];

        //
      }
    };
    getSurveys();
  }, []);
  return (
    <>
      <AuthorizedHeader />
      {console.log(`stan`)}
      {/* {console.log(sur[1].title)} */}
      <Wrapper>
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
            {sur.length <= 0 ? (
              <Info>
                <span>posiadasz narazie 0 ankiet</span>
              </Info>
            ) : (
              sur.map((survey, index) => (
                // console.log(survey.name);
                // console.log(survey.desc);
                <Survey
                  title={survey.title}
                  desc={survey.description}
                  deleteSurvey={deleteSurvey}
                  idx={index}
                  showSurvey={showSurvey}
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
