import React from 'react';
import userIcon from '../../../assets/icons/usericon.jpg';
import styled from 'styled-components';

const Wrapper = styled.img`
  // display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const UserIcon = () => {
  return <Wrapper src={userIcon}></Wrapper>;
};

export default UserIcon;
