import react from 'react';
import styled from 'styled-components';
import resultIcon from 'assets/headerIcons/results.svg';
import fillIcon from 'assets/headerIcons/FillOut.svg';
import profileIcon from 'assets/headerIcons/profile.svg';
import shareIcon from 'assets/headerIcons/share.svg';
import surveyIcon from 'assets/headerIcons/survey.svg';

const Logo = styled.h1`
  position: relative;
  //   top: 50%;
  //   line-height: 100%;
  margin-left: 50px;
  color: #0085ff;
  text-transform: uppercase;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background-color: white;
`;
const Bookmarks = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  dispaly: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  // background-color: red;
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 60px;
`;

const ProfileContainer = styled.div`
  position: absolute;
  right: 20px;
`;

const AuthorizedHeader = () => {
  return (
    <Wrapper>
      <Logo>Ankietuj to</Logo>
      <Bookmarks>
        <Icon src={surveyIcon} />
        <Icon src={fillIcon} />
        <Icon src={shareIcon} />
        <Icon src={resultIcon} />
      </Bookmarks>
      <ProfileContainer>
        <Icon src={profileIcon} />
      </ProfileContainer>
    </Wrapper>
  );
};

export default AuthorizedHeader;
