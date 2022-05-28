import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  // padding: 10px;
  position: relative;
  height: 100%;
  width: 20%;
  // border-right: 2px solid red;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  color: white;
  background-color: #4fa2f0;
  cursor: pointer;
  transition: 0.7s;
  text-transform: uppercase;
  text-align: center;

  //flexbox
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  :hover {
    top: -20px;
    padding: 20px;
    background-color: #ed9607;
    // background-color: #ed9f1f;
    // background-color: #a16400;
  }
  //#ED9F1F
`;
const Icon = styled.img`
  width: 100px;
  height: 100px;
  // margin-top: 100px;
  color: blue;
  // background-color: blue;
`;

const CategoryDiv = ({ text, icon }) => {
  return (
    <Wrapper>
      <h2>{text}</h2>
      <Icon src={icon} />

      {/* <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d={icon} />
      </Icon> */}
    </Wrapper>
  );
};

export default CategoryDiv;
