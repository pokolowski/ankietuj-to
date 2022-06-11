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
  transition: opacity 1s 1s linear;
  // transition: filter 0.2s;
  opacity: 0;
  position: relative;
  filter: blur(
    ${(props) => (props.errorPassword || props.deleteAcc ? '2' : '0')}px
  );
  overflow: hidden;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
`;
const IconContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color: red;
`;
const H2 = styled.h2`
  margin-left: 20px;
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
      {deleteAcc || props.content.content == '3' ? (
        <DeleteAccount setDeleteAcc={setDeleteAcc} />
      ) : (
        ''
      )}

      <Wrapper {...props} errorPassword={errorPassword} deleteAcc={deleteAcc}>
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
