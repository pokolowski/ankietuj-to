import React from 'react';
import styled from 'styled-components';
import ArrowIcon from 'assets/icons/arrow-right-solid.svg';
import { useNavigate } from 'react-router-dom';

const BackIcon = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  left: 50px;
  transform: rotate(180deg);
  cursor: pointer;
`;

const GoBack = ({ path }) => {
  const navigate = useNavigate();
  return <BackIcon src={ArrowIcon} onClick={() => navigate(path)} />;
};

export default GoBack;
