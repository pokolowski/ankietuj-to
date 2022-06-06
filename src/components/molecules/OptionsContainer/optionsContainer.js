import React from 'react';
import styled from 'styled-components';
import Xcross from 'assets/icons/Xcross.svg';

const Wrapper = styled.div`
  width: 50%;
  height: 500px;
  border-radius: 50px;
  padding: 10px;
  background-color: #c1e6ff;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  transition: 1s 1s linear;
  opacity: 0;
  position: relative;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
`;

const OptionsContainer = ({ ...props }) => {
  const Clicked = () => {
    props.setMove(!props.move);
  };
  return (
    <Wrapper {...props}>
      <Icon src={Xcross} onClick={() => Clicked()} />
    </Wrapper>
  );
};

export default OptionsContainer;
