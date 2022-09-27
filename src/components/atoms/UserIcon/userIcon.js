import React from 'react';
import userIcon from '../../../assets/icons/usericon.jpg';
import styled from 'styled-components';

const Wrapper = styled.img`
  width: ${(props) => (props.size ? props.size : '100px')};
  height: ${(props) => (props.size ? props.size : '100px')};
  border-radius: 50%;
`;

const UserIcon = ({ size }) => {
  return <Wrapper src={userIcon} size={size}></Wrapper>;
};

export default UserIcon;
