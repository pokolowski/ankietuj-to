import React from 'react';
import styled from 'styled-components';
import CategoryDiv from 'components/atoms/CategoryDiv/categoryDiv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import resultIcon from 'assets/headerIcons/results.svg';
import fillIcon from 'assets/headerIcons/FillOut.svg';
import profileIcon from 'assets/headerIcons/profile.svg';
import shareIcon from 'assets/headerIcons/share.svg';
import surveyIcon from 'assets/headerIcons/survey.svg';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  background-color: #067eed;
  position: relative;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;
const Question = styled.h1`
  position: absolute;
  // top: 50px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 2em;
  font-family: 'Alata';
  text-align: center;
`;
const FlexContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // background-color: #4fa2f0;
  width: 80%;
  height: 60%;

  //flexbox
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const WelcomePage = () => {
  return (
    <Wrapper>
      <Question>
        Cześć, *user*, <br />
        Powiedz nam, co chcesz zrobić?
      </Question>
      <FlexContainer>
        <CategoryDiv text="Zobacz profil" icon={profileIcon}></CategoryDiv>

        <CategoryDiv text="Stywórz ankietę" icon={surveyIcon}></CategoryDiv>

        <CategoryDiv text="Wypełnij ankiety" icon={fillIcon}></CategoryDiv>

        <CategoryDiv text="Udostępnij ankiety" icon={shareIcon}></CategoryDiv>

        <CategoryDiv
          text="Przeanalizuj zebrane wyniki ankiet"
          icon={resultIcon}
        ></CategoryDiv>
      </FlexContainer>
      {/* <RoundedDiv
        text="Przeanalizuj wyniki swojej ankiety"
        top="100"
        left="200"
        // bottom="200"
      />
      <RoundedDiv
        text="Udostepnij swoją ankietę"
        top="100"
        right="150"
        // bottom="100"
      />
      <RoundedDiv
        text="Zobacz profil"
        // top="100"
        right="250"
        bottom="50"
      />
      <RoundedDiv
        text="Stwórz ankietę"
        // top="100"
        // right="150"
        bottom="100"
      />
      <RoundedDiv
        text="Wypełniaj ankiety"
        // top="100"
        left="250"
        bottom="50"
      /> */}
    </Wrapper>
  );
};

export default WelcomePage;
