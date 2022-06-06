import React, { useState } from 'react';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import styled from 'styled-components';
import styles from './profilePage.module.css';
import UserIcon from 'components/atoms/UserIcon/userIcon';
import ProfileButtons from 'components/molecules/ProfileButtons/profileButtons';
import OptionsContainer from 'components/molecules/OptionsContainer/optionsContainer';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  background-color: #c1e6ff;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProfileContainer = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #c1e6ff;
  padding: 10px;
  border-radius: 50px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  transition: 1s linear;
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
`;

const ProfilePage = () => {
  const [move, setMove] = useState(false);
  return (
    <>
      <AuthorizedHeader />
      <Wrapper>
        <ProfileContainer className={move ? styles.ProfileContainer : ''}>
          <UserIcon />
          <h1>*User*</h1>
          <ProfileButtons setMove={setMove} move={move}></ProfileButtons>
        </ProfileContainer>
        <OptionsContainer
          setMove={setMove}
          move={move}
          className={move ? styles.displayOff : ''}
        ></OptionsContainer>
      </Wrapper>
    </>
  );
};

export default ProfilePage;
