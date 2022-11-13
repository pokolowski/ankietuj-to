import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const Wrapper = styled(NavLink)`
  position: relative;
  width: 20%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  color: white;
  cursor: pointer;
  transition: 0.7s;
  text-transform: uppercase;
  text-align: center;
  overflow: hidden;
  text-decoration: none;

  //flexbox
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  :hover {
    top: -20px;
    padding: 20px;
    background-color: #ed9607;
  }
  @media (max-width: 600px) {
    width: 40%;
    padding: 10px;
  }
`;
const Icon = styled.img`
  width: 100px;
  height: 100px;
  // margin-top: 100px;
  color: blue;
  // background-color: blue;
`;
const Label = styled.span`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  // overflow: hidden;
  @media (max-width: 1050px) {
    font-size: 20px;
  }
  @media (max-width: 850px) {
    font-size: 17px;
  }
  @media (max-width: 750px) {
    font-size: 10px;
  }
`;

const CategoryDiv = ({ text, icon, path = '/', ...props }) => {
  return (
    <Wrapper to={`${path}`} {...props}>
      <Label>{text}</Label>
      <Icon src={icon} />
    </Wrapper>
  );
};

export default CategoryDiv;
