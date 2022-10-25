import React, { useState } from 'react';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import styled from 'styled-components';
import styles from './profilePage.module.css';
import UserIcon from 'components/atoms/UserIcon/userIcon';
import ProfileButtons from 'components/molecules/ProfileButtons/profileButtons';
import OptionsContainer from 'components/molecules/OptionsContainer/optionsContainer';
import { useAuth } from 'hooks/useAuth';
import RightArrow from 'assets/icons/arrow-right-solid.svg';

const Wrapper = styled.div`
  width: 100%;
  min-width: 330px;
  height: calc(100vh - 100px);
  background-color: #c1e6ff;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    height: 100vh;
    min-height: 800px;
  }
`;
const ProfileContainer = styled.div`
  width: 300px;
  height: 500px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #c1e6ff;
  padding: 10px;
  border-radius: 50px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  ${(props) =>
    props.move ? 'transition: .7s linear;' : 'transition: .7s .7s linear;'}
  z-index: 1;
`;
const ShowMenu = styled.div`
  width: 70px;
  height: 50px;
  position: absolute;
  left: -20px;
  top: calc(50% - 250px);
  transform: translateY(-50%);
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  overflow: hidden;
  border-radius: 20px;
  display: none;
  transition: display 0.1 7 linear;
`;
const Arrow = styled.img`
  width: 70%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
`;

const ProfilePage = () => {
  const [move, setMove] = useState(false);
  const [content, setContent] = useState(0);
  const auth = useAuth();
  return (
    <>
      <AuthorizedHeader />
      <Wrapper>
        <ProfileContainer
          className={move ? styles.ProfileContainer : ''}
          move={move}
        >
          <UserIcon />
          <h1>{auth.user.imie}</h1>
          <ProfileButtons
            setMove={setMove}
            content={{ content, setContent }}
            move={move}
          ></ProfileButtons>
        </ProfileContainer>
        <OptionsContainer
          setMove={setMove}
          content={{ content, setContent }}
          move={move}
          className={move ? styles.displayOff : ''}
        ></OptionsContainer>
      </Wrapper>
    </>
  );
};

export default ProfilePage;
