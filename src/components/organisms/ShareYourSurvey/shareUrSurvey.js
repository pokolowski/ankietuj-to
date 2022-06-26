import React from 'react';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import styled from 'styled-components';
import Survey from 'components/atoms/SurverForShare/survey';

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  // height: auto;
  position: relative;
  overflow: hidden;
  background-color: #19a4e3;
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
  width: 80%;
  min-height: 100px;
  margin-bottom: 150px;
  position: relative;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  // background-color: red;
  font-size: 16px;
  font-family: 'Alata';
  text-align: center;
`;

const ShareUrSurvey = ({ user }) => {
  return (
    <>
      <AuthorizedHeader />
      <Wrapper>
        <Disclaimer>
          Chcesz udostępnić swoją ankietę?
          <br /> Może to zrobić jednym kliknięciem! Jednak, aby to zrobić musisz
          najpierw wypełnić 5 cudzych ankiet <a href="#">w tym miejscu</a>.
          <br />
          Dzięki temu systemowi Ty, oraz inni użytkownicy zbierzecie wymaganą
          ilość odpowiedzi do swoich ankiet w możliwie najkrótszym czasie!
        </Disclaimer>
        <SurveysContainer>
          <Title>Wybierz, którą ankietę chcesz udostępnić</Title>
          <Survey />
          <Survey />
          <Survey />
          <Survey />
        </SurveysContainer>
      </Wrapper>
    </>
  );
};

export default ShareUrSurvey;
