import React, { useEffect, useState } from 'react';
import styles from './welcomePage.module.css';
import styled from 'styled-components';
import CategoryDiv from 'components/atoms/CategoryDiv/categoryDiv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import resultIcon from 'assets/headerIcons/results.svg';
import fillIcon from 'assets/headerIcons/FillOut.svg';
import profileIcon from 'assets/headerIcons/profile.svg';
import shareIcon from 'assets/headerIcons/share.svg';
import surveyIcon from 'assets/headerIcons/survey.svg';
import LogOutIcon from 'assets/headerIcons/logOut.svg';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  background-color: #067eed;
  position: relative;
  overflow: hidden;
  @media (max-width: 900px) {
    height: 100vh;
  }
`;
const Question = styled.h1`
  position: absolute;
  // top: 50px;
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 2em;
  font-family: 'Alata';
  text-align: center;
`;
const FlexContainer = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 60%;

  //flexbox
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  @media (max-width: 910px) {
    margin-top: 30px;
    flex-wrap: wrap;
  }
  @media (max-width: 490px) {
    margin-top: 40px;
  }
`;

const WelcomePage = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const auth = useAuth();
  return (
    <Wrapper className={styles.test}>
      <Question>
        Cześć, {auth.user.imie}, <br />
        Powiedz nam, co chcesz zrobić?
      </Question>
      <FlexContainer>
        <CategoryDiv
          text="Zobacz profil"
          icon={profileIcon}
          path="/profile"
        ></CategoryDiv>

        <CategoryDiv
          text="Twoje ankiety"
          icon={surveyIcon}
          path="/surveys"
        ></CategoryDiv>

        <CategoryDiv
          text="Wypełnij ankiety"
          icon={fillIcon}
          path="/dashboard"
        ></CategoryDiv>

        <CategoryDiv
          text="Udostępnij ankiety"
          icon={shareIcon}
          path="/shareSurveys"
        ></CategoryDiv>

        <CategoryDiv
          text="Przeanalizuj zebrane wyniki ankiet"
          icon={resultIcon}
          path="/analize"
        ></CategoryDiv>
        {windowDimensions.width <= 600 ? (
          <CategoryDiv
            text="Wyloguj się"
            icon={LogOutIcon}
            onClick={() => auth.signOut()}
          ></CategoryDiv>
        ) : (
          <></>
        )}
      </FlexContainer>
    </Wrapper>
  );
};

export default WelcomePage;
