import React from 'react';
import styled from 'styled-components';
import ProfileOptionLi from 'components/atoms/ProfileOptionLi/profileOptionLi';

const Wrapper = styled.ul`
  width: 80%;
  height: 60%;
  padding: 0;
  background-color: #c1e6ff;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ProfileButtons = ({ setMove, move, content }) => {
  const Clicked = (button = 0) => {
    if (!move) {
      setMove(true);
    }
    if (content.content != button) {
      content.setContent(button);
    }
    if (content.content == button && move) setMove(false);
  };
  return (
    <Wrapper>
      <ProfileOptionLi name="1" value="Twoje dane" onClick={Clicked} />
      <ProfileOptionLi
        name="2"
        value="Zmień dane logowania"
        onClick={Clicked}
      />
      <ProfileOptionLi
        name="3"
        value="Usuń konto"
        color="#B31614"
        onClick={Clicked}
      />
    </Wrapper>
  );
};

export default ProfileButtons;
