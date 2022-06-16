import React, { useState } from 'react';
import styled from 'styled-components';
import Xcross from 'assets/icons/Xcross.svg';
import UserIcon from 'components/atoms/UserIcon/userIcon';
import UserData from './UserData/userData';
import LoginData from './LoginData/loginData';
import ErrorPass from './LoginData/ErrorPassword/errorPass';
import { useAuth } from 'hooks/useAuth';
import DeleteAccount from './DeleteAccount/deleteAccount';

const Wrapper = styled.div`
  width: 50%;
  height: 500px;
  border-radius: 50px;
  padding: 10px;
  background-color: #c1e6ff;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  ${(props) =>
    props.move ? 'transition: .7s .7s linear;' : 'transition: .7s linear;'}
  // transition: filter 0.2s;
  opacity: 0;
  position: relative;
  filter: blur(
    ${(props) => (props.errorPassword || props.deleteAcc ? '2' : '0')}px
  );
  overflow: hidden;
  @media (max-width: 900px) {
    width: 90%;
    min-height: 80%;
  }
  @media (min-width: 901px) and (max-width: 1150px) {
    margin-left: 400px;
    // display: none;
  }
  @media (min-width: 1151px) and (max-width: 1550px) {
    margin-left: 200px;
  }
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  z-index: 5;
`;
const IconContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center; !important;
  // background-color: blue;
  @media (max-width: 900px) {
    width: 80%;
  }
`;
const H2 = styled.h2`
  margin-left: 20px;
  // background-color: red;
`;

const OptionsContainer = ({ ...props }) => {
  const [errorPassword, setErrorPassword] = useState(false);
  const [deleteAcc, setDeleteAcc] = useState(false);
  const auth = useAuth();
  const Clicked = () => {
    props.setMove(!props.move);
  };
  return (
    <>
      {errorPassword ? <ErrorPass setErrorPassword={setErrorPassword} /> : ''}

      <Wrapper
        {...props}
        errorPassword={errorPassword}
        deleteAcc={deleteAcc}
        move={props.move}
      >
        {deleteAcc || props.content.content == '3' ? (
          <DeleteAccount setDeleteAcc={setDeleteAcc} close={Clicked} />
        ) : (
          ''
        )}
        <IconContainer>
          <UserIcon />
          <H2>
            {auth.user.imie} {auth.user.nazwisko}
          </H2>
        </IconContainer>
        {props.content.content == '1' ? (
          <UserData />
        ) : props.content.content == '2' ? (
          <LoginData setErrorPassword={setErrorPassword} />
        ) : (
          ''
        )}
        <Icon src={Xcross} onClick={() => Clicked()} />
      </Wrapper>
    </>
  );
};

export default OptionsContainer;
