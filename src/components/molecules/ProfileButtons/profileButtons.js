import React from 'react';
import styled from 'styled-components';
import ProfileOptionLi from 'components/atoms/ProfileOptionLi/profileOptionLi';

const Wrapper = styled.ul`
  width: 80%;
  height: 60%;
  padding: 0;
  background-color: #c1e6ff;
  //   background-color: red;
  //   border-radius: 50px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ProfileButtons = ({ setMove }) => {
  const Clicked = () => {
    setMove(true);
  };
  return (
    <Wrapper>
      <ProfileOptionLi value="Twoje dane" onClick={Clicked} />
      <ProfileOptionLi value="Zmień dane logowania" />
      <ProfileOptionLi value="Usuń konto" color="#B31614" />
    </Wrapper>
  );
};

export default ProfileButtons;
