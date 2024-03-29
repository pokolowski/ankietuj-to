import react from 'react';
import styled from 'styled-components';
import resultIcon from 'assets/headerIcons/results.svg';
import fillIcon from 'assets/headerIcons/FillOut.svg';
import profileIcon from 'assets/headerIcons/profile.svg';
import shareIcon from 'assets/headerIcons/share.svg';
import surveyIcon from 'assets/headerIcons/survey.svg';
import surveyIconOrange from 'assets/headerIcons/orange/survey.svg';
import resultIconOrange from 'assets/headerIcons/orange/results.svg';
import fillIconOrange from 'assets/headerIcons/orange/FillOut.svg';
import profileIconOrange from 'assets/headerIcons/orange/profile.svg';
import shareIconOrange from 'assets/headerIcons/orange/share.svg';
import logOutIconOrange from 'assets/headerIcons/orange/logOut.svg';
import logOutIcon from 'assets/headerIcons/logOut.svg';
import { useAuth } from 'hooks/useAuth';
import { NavLink, useNavigate } from 'react-router-dom';
const Logo = styled(NavLink)`
  position: relative;
  margin-left: 50px;
  color: #0085ff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2em;
  text-decoration: none;
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
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  background-color: white;
  z-index: 5;

  @media (max-width: 900px) {
    display: none;
  }
`;
const Bookmarks = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Icon = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  color: green;
`;
const IconProfile = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 60px;
  cursor: pointer;
  color: green;
`;

const ProfileContainer = styled.div`
  position: absolute;
  right: 20px;
`;
const IconTitle = styled.p`
  position: absolute;
  bottom: -30px;
  font-weight: 500;
  font-size: 15px;
  text-transform: uppercase;
`;
const IconContainer = styled.div`
  width: 55px;
  height: 55px;
  color: #0085ff;
  margin-right: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const AuthorizedHeader = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleHover = (e) => {
    switch (e.target.getAttribute('name')) {
      case '1':
        e.target.setAttribute('src', surveyIconOrange);
        break;
      case '2':
        e.target.setAttribute('src', fillIconOrange);
        break;
      case '3':
        e.target.setAttribute('src', shareIconOrange);
        break;
      case '4':
        e.target.setAttribute('src', resultIconOrange);
        break;
      case '5':
        e.target.setAttribute('src', profileIconOrange);
        break;
      case '6':
        e.target.setAttribute('src', logOutIconOrange);
        break;
    }
  };
  const handleClick = (e) => {
    switch (e.target.getAttribute('name')) {
      case '1':
        navigate('/surveys');
        break;
      case '2':
        navigate('/dashboard');
        break;
      case '3':
        navigate('/shareSurveys');
        break;
      case '4':
        navigate('/analize');
        break;
      case '5':
        navigate('/profile');
        break;
    }
  };
  const handleMouseLeave = (e) => {
    switch (e.target.getAttribute('name')) {
      case '1':
        e.target.setAttribute('src', surveyIcon);
        break;
      case '2':
        e.target.setAttribute('src', fillIcon);
        break;
      case '3':
        e.target.setAttribute('src', shareIcon);
        break;
      case '4':
        e.target.setAttribute('src', resultIcon);
        break;
      case '5':
        e.target.setAttribute('src', profileIcon);
        break;
      case '6':
        e.target.setAttribute('src', logOutIcon);
        break;
    }
  };
  const handleSingOut = () => {
    auth.signOut();
  };
  return (
    <Wrapper>
      <Logo to="/">Ankietuj to</Logo>
      <Bookmarks>
        <IconContainer>
          <Icon
            name="1"
            src={surveyIcon}
            onMouseOver={handleHover}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          />
          <IconTitle>Stwórz</IconTitle>
        </IconContainer>
        <IconContainer>
          <Icon
            name="2"
            src={fillIcon}
            onMouseOver={handleHover}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          />
          <IconTitle>Wypełnij</IconTitle>
        </IconContainer>
        <IconContainer>
          <Icon
            name="3"
            src={shareIcon}
            onMouseOver={handleHover}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          />
          <IconTitle>Udostępnij</IconTitle>
        </IconContainer>
        <IconContainer>
          <Icon
            name="4"
            src={resultIcon}
            onMouseOver={handleHover}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          />
          <IconTitle>Analizuj</IconTitle>
        </IconContainer>
      </Bookmarks>
      <ProfileContainer>
        <IconProfile
          name="5"
          src={profileIcon}
          onMouseOver={handleHover}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        />
        <IconProfile
          name="6"
          src={logOutIcon}
          onMouseOver={handleHover}
          onMouseLeave={handleMouseLeave}
          onClick={handleSingOut}
        />
      </ProfileContainer>
    </Wrapper>
  );
};

export default AuthorizedHeader;
