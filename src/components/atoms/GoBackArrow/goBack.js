import React from 'react';
import styled from 'styled-components';
import ArrowIcon from 'assets/icons/arrow-right-solid.svg';
import { useNavigate } from 'react-router-dom';

const BackIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 30px;
  left: 20px;
  transform: rotate(180deg);
  cursor: pointer;
  z-index: 3;
  @media (min-width: 900px) {
    // display: none;
  }
`;

const GoBack = ({ path }) => {
  if (!path) {
    path = -1;
  }
  const navigate = useNavigate();
  return <BackIcon src={ArrowIcon} onClick={() => navigate(path)} />;
};

export default GoBack;
