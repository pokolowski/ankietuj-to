import React from 'react';
import styled from 'styled-components';
import gif from 'assets/gifs/surveygif.gif';
import './homeSlider.css';

const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: calc(100vh - 100px);
  color: #067eed;
  background-color: #067eed;
`;
const HomeSlider = () => (
  <Wrapper>
    <img src={gif} />
  </Wrapper>
);

export default HomeSlider;
